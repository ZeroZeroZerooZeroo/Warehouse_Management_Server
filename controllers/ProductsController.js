/**
 * The ProductsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProductsService');
const product_categoriesCategory_idDELETE = async (request, response) => {
    const category_id = Number(request.params.category_id);
    
    if (isNaN(category_id)) {
      return response.status(400).json({ error: "Invalid category ID" });
    }
  
    try {
      const result = await service.product_categoriesCategory_idDELETE(category_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const product_categoriesCategory_idGET = async (request, response) => {
  const category_id = Number(request.params.category_id);
    
    if (isNaN(category_id)) {
      return response.status(400).json({ error: "Invalid category ID" });
    }
  
    try {
      const categoryData = await service.product_categoriesCategory_idGET(category_id);
      response.status(200).json(categoryData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const product_categoriesCategory_idPUT = async (request, response) => {
   try {
      const category_id = Number(request.params.category_id);
      if (isNaN(category_id)) {
        return response.status(400).json({ error: "Invalid category ID" });
      }
  
      const updateData = request.body;
  
      const result = await service.product_categoriesCategory_idPUT(category_id, updateData);
      response.status(200).json(result.data);
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const product_categoriesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.product_categoriesGET);
};

const product_categoriesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.product_categoriesPOST);
};

const productsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.productsGET);
};

const productsPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.productsPOST);
};

const productsProduct_idDELETE = async (request, response) => {
    const product_id = Number(request.params.product_id);
    
    if (isNaN(product_id)) {
      return response.status(400).json({ error: "Invalid product ID" });
    }
  
    try {
      const result = await service.productsProduct_idDELETE(product_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const productsProduct_idGET = async (request, response) => {
  const product_id = Number(request.params.product_id);
    
    if (isNaN(product_id)) {
      return response.status(400).json({ error: "Invalid product ID" });
    }
  
    try {
      const productData = await service.productsProduct_idGET(product_id);
      response.status(200).json(productData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
  };

const productsProduct_idPUT = async (request, response) => {
  try {
      const product_id = Number(request.params.product_id);
      if (isNaN(product_id)) {
        return response.status(400).json({ error: "Invalid product ID" });
      }
  
      const updateData = request.body;
  
      const result = await service.productsProduct_idPUT(product_id, updateData);
      response.status(200).json(result.data);
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};


module.exports = {
  product_categoriesCategory_idDELETE,
  product_categoriesCategory_idGET,
  product_categoriesCategory_idPUT,
  product_categoriesGET,
  product_categoriesPOST,
  productsGET,
  productsPOST,
  productsProduct_idDELETE,
  productsProduct_idGET,
  productsProduct_idPUT,
};
