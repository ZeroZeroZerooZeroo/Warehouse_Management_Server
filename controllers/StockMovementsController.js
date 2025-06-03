/**
 * The StockMovementsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/StockMovementsService');
const movement_typesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.movement_typesGET);
};

const movement_typesMovement_type_idDELETE = async (request, response) => {
  const movement_type_id = Number(request.params.movement_type_id);
    
    if (isNaN(movement_type_id)) {
      return response.status(400).json({ error: "Invalid movement type ID" });
    }
  
    try {
      const result = await service.movement_typesMovement_type_idDELETE(movement_type_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const movement_typesMovement_type_idGET = async (request, response) => {
  const movement_type_id = Number(request.params.movement_type_id);
    
    if (isNaN(movement_type_id)) {
      return response.status(400).json({ error: "Invalid movement type ID" });
    }
  
    try {
      const movementData = await service.movement_typesMovement_type_idGET(movement_type_id);
      response.status(200).json(movementData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const movement_typesMovement_type_idPUT = async (request, response) => {
 try {
     const movement_type_id = Number(request.params.movement_type_id);
     if (isNaN(movement_type_id)) {
       return response.status(400).json({ error: "Invalid movement type ID" });
     }
 
     const updateData = request.body;
 
     const result = await service.movement_typesMovement_type_idPUT(movement_type_id, updateData);
     response.status(200).json(result.data);
   } catch (e) {
     response.status(e.status || 500).json({ error: e.message });
   }
};

const movement_typesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.movement_typesPOST);
};

const stock_movementsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.stock_movementsGET);
};

const stock_movementsMovement_idDELETE = async (request, response) => {
    const movement_id = Number(request.params.movement_id);
    
    if (isNaN(movement_id)) {
      return response.status(400).json({ error: "Invalid stock ID" });
    }
  
    try {
      const result = await service.stock_movementsMovement_idDELETE(movement_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const stock_movementsMovement_idGET = async (request, response) => {
  const movement_id = Number(request.params.movement_id);
    
    if (isNaN(movement_id)) {
      return response.status(400).json({ error: "Invalid stock ID" });
    }
  
    try {
      const stockData = await service.stock_movementsMovement_idGET(movement_id);
      response.status(200).json(stockData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const stock_movementsMovement_idPUT = async (request, response) => {
   try {
      const movement_id = Number(request.params.movement_id);
      if (isNaN(movement_id)) {
        return response.status(400).json({ error: "Invalid stock ID" });
      }
  
      const updateData = request.body;
  
      const result = await service.stock_movementsMovement_idPUT(movement_id, updateData);
      response.status(200).json(result.data);
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const stock_movementsPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.stock_movementsPOST);
};


module.exports = {
  movement_typesGET,
  movement_typesMovement_type_idDELETE,
  movement_typesMovement_type_idGET,
  movement_typesMovement_type_idPUT,
  movement_typesPOST,
  stock_movementsGET,
  stock_movementsMovement_idDELETE,
  stock_movementsMovement_idGET,
  stock_movementsMovement_idPUT,
  stock_movementsPOST,
};
