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
  await Controller.handleRequest(request, response, service.inventoryInventory_idDELETE);
};

const inventoryInventory_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.inventoryInventory_idGET);
};

const inventoryInventory_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.inventoryInventory_idPUT);
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
