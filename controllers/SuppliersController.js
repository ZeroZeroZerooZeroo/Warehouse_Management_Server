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
  await Controller.handleRequest(request, response, service.suppliersSupplier_idDELETE);
};

const suppliersSupplier_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.suppliersSupplier_idGET);
};

const suppliersSupplier_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.suppliersSupplier_idPUT);
};


module.exports = {
  suppliersGET,
  suppliersPOST,
  suppliersSupplier_idDELETE,
  suppliersSupplier_idGET,
  suppliersSupplier_idPUT,
};
