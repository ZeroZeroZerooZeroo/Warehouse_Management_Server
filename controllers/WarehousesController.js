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
  await Controller.handleRequest(request, response, service.warehousesWarehouse_idDELETE);
};

const warehousesWarehouse_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.warehousesWarehouse_idGET);
};

const warehousesWarehouse_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.warehousesWarehouse_idPUT);
};


module.exports = {
  warehousesGET,
  warehousesPOST,
  warehousesWarehouse_idDELETE,
  warehousesWarehouse_idGET,
  warehousesWarehouse_idPUT,
};
