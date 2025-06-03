/**
 * The SalesController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SalesService');
const salesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.salesGET);
};

const salesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.salesPOST);
};

const salesRecord_idDELETE = async (request, response) => {
  const record_id = Number(request.params.record_id);
    
    if (isNaN(record_id)) {
      return response.status(400).json({ error: "Invalid sale ID" });
    }
  
    try {
      const result = await service.salesRecord_idDELETE(record_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const salesRecord_idGET = async (request, response) => {
  const record_id = Number(request.params.record_id);
    
    if (isNaN(record_id)) {
      return response.status(400).json({ error: "Invalid sale ID" });
    }
  
    try {
      const saleData = await service.salesRecord_idGET(record_id);
      response.status(200).json(saleData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const salesRecord_idPUT = async (request, response) => {
   try {
      const record_id = Number(request.params.record_id);
      if (isNaN(record_id)) {
        return response.status(400).json({ error: "Invalid sale ID" });
      }
  
      const updateData = request.body;
  
      const result = await service.salesRecord_idPUT(record_id, updateData);
      response.status(200).json(result.data);
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};


module.exports = {
  salesGET,
  salesPOST,
  salesRecord_idDELETE,
  salesRecord_idGET,
  salesRecord_idPUT,
};
