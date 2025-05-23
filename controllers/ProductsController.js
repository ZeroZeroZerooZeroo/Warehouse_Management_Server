/**
 * The ProductsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProductsService');
const product_categoriesCategory_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.product_categoriesCategory_idDELETE);
};

const product_categoriesCategory_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.product_categoriesCategory_idGET);
};

const product_categoriesCategory_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.product_categoriesCategory_idPUT);
};

const product_categoriesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.product_categoriesGET);
};

const product_categoriesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.product_categoriesPOST);
};

const productsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.productsGET);
};

const productsPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.productsPOST);
};

const productsProduct_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.productsProduct_idDELETE);
};

const productsProduct_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.productsProduct_idGET);
};

const productsProduct_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.productsProduct_idPUT);
};


module.exports = {
  product_categoriesCategory_idDELETE,
  product_categoriesCategory_idGET,
  product_categoriesCategory_idPUT,
  product_categoriesGET,
  product_categoriesPOST,
  productsGET,
  productsPOST,
  productsProduct_idDELETE,
  productsProduct_idGET,
  productsProduct_idPUT,
};
