const { exec } = require('child_process');
const Service = require('./Service');
const pool = require('./db');
const { PythonShell } = require('python-shell');

const executePythonScript  = (inputData, modelType) => {
    return new Promise((resolve, reject) => {
        const python = exec(`python3 ml/scripts/start_NN.py`, { stdio: 'pipe' });

        const dataToSend = JSON.stringify({
            data: inputData,
            model_type: modelType
        });

        python.stdin.write(dataToSend);
        python.stdin.end();

        let result = '';
        python.stdout.on('data', (data) => result += data);
        python.stderr.on('data', (data) => reject(data));
        python.on('close', () => resolve(JSON.parse(result)));
  });
};
const generateDemandForecast = async ({ forecastNNRequest }) => {
  try {
    const productData = await Promise.all(forecastNNRequest.products.map(async (product) => {
      const { rows } = await pool.query(`
        SELECT 
        p.product_id,
        p.price AS current_price,
        p.stock,
        (
          SELECT JSON_AGG(quantity ORDER BY date DESC)
          FROM (
            SELECT quantity, date
            FROM sales_history 
            WHERE product_id = p.product_id 
            ORDER BY date DESC 
            LIMIT 30
          ) AS recent_sales
        ) AS historical_sales,
        EXTRACT(DOW FROM NOW())::int AS day_of_week,
        c.category_id
      FROM product p
      JOIN product_categorie c ON p.category_id = c.category_id
      WHERE p.product_id = ANY($1::int[])`, [product.product_id]);
      
      return {
        product_id: product.product_id,
        features: rows[0]
      };
    }));

    const pythonResult = await executePythonScript(
      productData,
      forecastNNRequest.model_type
    );

    const savedForecasts = await Promise.all(pythonResult.results.map(async (result) => {
      if(result.status !== 'success') return result;

      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        
        const forecastInsert = await client.query(`
          WITH new_forecast AS (
            INSERT INTO demand_forecasts (
              forecast_date, period_start, period_end, 
              predicted_quantity, forecasts_type_id
            )
            VALUES (NOW(), $1, $2, $3, $4)
            RETURNING forecast_id, forecasts_type_id
          )
          INSERT INTO product_demand_forecasts
          SELECT $5, forecast_id, forecasts_type_id
          FROM new_forecast
          RETURNING *`, [
          forecastNNRequest.period_start,
          forecastNNRequest.period_end,
          result.prediction,
          forecastNNRequest.forecasts_type_id,
          result.product_id
        ]);

        await client.query('COMMIT');
        return forecastInsert.rows[0];
      } catch (e) {
        await client.query('ROLLBACK');
        throw e;
      } finally {
        client.release();
      }
    }));

    return Service.successResponse(savedForecasts);
  } catch (e) {
    return Service.rejectResponse(e.message || 'Forecast generation failed', 500);
  }
};

module.exports = {
  generateDemandForecast,
};
