import sys
import json
import os
import numpy as np
import joblib
from tensorflow.keras.models import load_model

BASE_DIR = os.path.dirname(os.path.abspath(__file__))  
MODELS_DIR = os.path.join(BASE_DIR, "..", "models") 

# Loading scaler
scaler = joblib.load(os.path.join(MODELS_DIR, "sales_scaler.pkl"))

def prepare_input(item_features):
    # Normalization of historical_sales
    sales = np.array(item_features["historical_sales"]).reshape(-1, 1)
    sales_normalized = scaler.transform(sales).flatten()
    
    features = np.concatenate([
        sales_normalized,
        [
            item_features["price"],
            item_features["day_of_week"],
            item_features["stock"]
        ],
        item_features["category"]
    ])
    
    temporal = sales_normalized.reshape(1, 30, 1)
    static = np.array(features[30:]).reshape(1, -1)
    static_expanded = np.repeat(static[:, np.newaxis, :], 30, axis=1)
    
    return np.concatenate([temporal, static_expanded], axis=-1)

def process_request(input_data, model_type):
    model_path = os.path.join(MODELS_DIR, f"demand_model_{model_type}.keras")
    try:
        model = load_model(model_path)
    except Exception as e:
        return {"error": str(e)}
    
    results = []
    for item in input_data:
        try:
            input_tensor = prepare_input(item["features"])
            prediction = model.predict(input_tensor)[0][0]
            results.append({
                "product_id": item["product_id"],
                "prediction": float(prediction),
                "status": "success"
            })
        except Exception as e:
            results.append({
                "product_id": item.get("product_id", "unknown"),
                "error": str(e),
                "status": "error"
            })
    return {"results": results}

if __name__ == "__main__":
    
    input_json = json.load(sys.stdin)
    
    # Request processing    
    output = process_request(
        input_data=input_json["data"],
        model_type=input_json["model_type"]
    )
    
    # Output of the result
    print(json.dumps(output))