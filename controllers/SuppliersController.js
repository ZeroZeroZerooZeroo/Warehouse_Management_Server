/**
 * The SuppliersController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SuppliersService');
const suppliersGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.suppliersGET);
};

const suppliersPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.suppliersPOST);
};

const suppliersSupplier_idDELETE = async (request, response) => {
  
  const supplier_id = Number(request.params.supplier_id);
    
    if (isNaN(supplier_id)) {
      return response.status(400).json({ error: "Invalid supplier ID" });
    }
  
    try {
      const result = await service.suppliersSupplier_idDELETE(supplier_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const suppliersSupplier_idGET = async (request, response) => {
   const supplier_id = Number(request.params.supplier_id);
    
    if (isNaN(supplier_id)) {
      return response.status(400).json({ error: "Invalid supplier ID" });
    }
  
    try {
      const supplierData = await service.suppliersSupplier_idGET(supplier_id);
      response.status(200).json(supplierData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const suppliersSupplier_idPUT = async (request, response) => {
 
   try {
      const supplier_id = Number(request.params.supplier_id);
      if (isNaN(supplier_id)) {
        return response.status(400).json({ error: "Invalid supplier ID" });
      }
  
      const updateData = request.body;
  
      const result = await service.suppliersSupplier_idPUT(supplier_id, updateData);
      response.status(200).json(result.data);
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};


module.exports = {
  suppliersGET,
  suppliersPOST,
  suppliersSupplier_idDELETE,
  suppliersSupplier_idGET,
  suppliersSupplier_idPUT,
};
