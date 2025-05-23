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
  await Controller.handleRequest(request, response, service.salesRecord_idDELETE);
};

const salesRecord_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.salesRecord_idGET);
};

const salesRecord_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.salesRecord_idPUT);
};


module.exports = {
  salesGET,
  salesPOST,
  salesRecord_idDELETE,
  salesRecord_idGET,
  salesRecord_idPUT,
};
