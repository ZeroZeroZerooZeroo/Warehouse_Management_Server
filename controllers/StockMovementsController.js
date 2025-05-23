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
  await Controller.handleRequest(request, response, service.movement_typesMovement_type_idDELETE);
};

const movement_typesMovement_type_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.movement_typesMovement_type_idGET);
};

const movement_typesMovement_type_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.movement_typesMovement_type_idPUT);
};

const movement_typesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.movement_typesPOST);
};

const stock_movementsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.stock_movementsGET);
};

const stock_movementsMovement_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.stock_movementsMovement_idDELETE);
};

const stock_movementsMovement_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.stock_movementsMovement_idGET);
};

const stock_movementsMovement_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.stock_movementsMovement_idPUT);
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
