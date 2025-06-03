/**
 * The InventoryController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/InventoryService');
const inventoryGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.inventoryGET);
};

const inventoryInventory_idDELETE = async (request, response) => {
   const inventory_id = Number(request.params.inventory_id);
    
    if (isNaN(inventory_id)) {
      return response.status(400).json({ error: "Invalid inventory ID" });
    }
  
    try {
      const result = await service.inventoryInventory_idDELETE(inventory_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const inventoryInventory_idGET = async (request, response) => {
  const inventory_id = Number(request.params.inventory_id);
   
   if (isNaN(inventory_id)) {
     return response.status(400).json({ error: "Invalid inventory ID" });
   }
 
   try {
     const inventoryData = await service.inventoryInventory_idGET(inventory_id);
     response.status(200).json(inventoryData);  
   } catch (e) {
     response.status(e.status || 500).json({ error: e.message });
   }
};

const inventoryInventory_idPUT = async (request, response) => {
   try {
      const inventory_id = Number(request.params.inventory_id);
      if (isNaN(inventory_id)) {
        return response.status(400).json({ error: "Invalid inventory ID" });
      }
  
      const updateData = request.body;
  
      const result = await service.inventoryInventory_idPUT(inventory_id, updateData);
      response.status(200).json(result.data);
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const inventoryPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.inventoryPOST);
};


module.exports = {
  inventoryGET,
  inventoryInventory_idDELETE,
  inventoryInventory_idGET,
  inventoryInventory_idPUT,
  inventoryPOST,
};
