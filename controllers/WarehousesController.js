/**
 * The WarehousesController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/WarehousesService');
const warehousesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.warehousesGET);
};

const warehousesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.warehousesPOST);
};

const warehousesWarehouse_idDELETE = async (request, response) => {
  const warehouses_id = Number(request.params.warehouse_id);
    
    if (isNaN(warehouses_id)) {
      return response.status(400).json({ error: "Invalid warehouses ID" });
    }
  
    try {
      const result = await service.warehousesWarehouse_idDELETE(warehouses_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const warehousesWarehouse_idGET = async (request, response) => {
  const warehouses_id = Number(request.params.warehouse_id);
    
    if (isNaN(warehouses_id)) {
      return response.status(400).json({ error: "Invalid warehouses ID" });
    }
  
    try {
      const warehousesData = await service.warehousesWarehouse_idGET(warehouses_id);
      response.status(200).json(warehousesData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
  
};

const warehousesWarehouse_idPUT = async (request, response) => {
  try {
      const warehouses_id = Number(request.params.warehouse_id);
      if (isNaN(warehouses_id)) {
        return response.status(400).json({ error: "Invalid warehouses ID" });
      }
  
      const updateData = request.body;
  
      const result = await service.warehousesWarehouse_idPUT(warehouses_id, updateData);
      response.status(200).json(result.data);
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
  
};


module.exports = {
  warehousesGET,
  warehousesPOST,
  warehousesWarehouse_idDELETE,
  warehousesWarehouse_idGET,
  warehousesWarehouse_idPUT,
};
