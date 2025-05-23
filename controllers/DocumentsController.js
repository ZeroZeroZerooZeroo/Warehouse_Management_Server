/**
 * The DocumentsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DocumentsService');
const document_statusesDocument_status_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_statusesDocument_status_idDELETE);
};

const document_statusesDocument_status_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_statusesDocument_status_idGET);
};

const document_statusesDocument_status_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_statusesDocument_status_idPUT);
};

const document_statusesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_statusesGET);
};

const document_statusesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_statusesPOST);
};

const document_typesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_typesGET);
};

const document_typesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_typesPOST);
};

const document_typesType_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_typesType_idDELETE);
};

const document_typesType_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_typesType_idGET);
};

const document_typesType_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_typesType_idPUT);
};

const documentsDocument_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.documentsDocument_idDELETE);
};

const documentsDocument_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.documentsDocument_idGET);
};

const documentsDocument_idItemsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.documentsDocument_idItemsGET);
};

const documentsDocument_idItemsItem_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.documentsDocument_idItemsItem_idDELETE);
};

const documentsDocument_idItemsItem_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.documentsDocument_idItemsItem_idGET);
};

const documentsDocument_idItemsItem_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.documentsDocument_idItemsItem_idPUT);
};

const documentsDocument_idItemsPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.documentsDocument_idItemsPOST);
};

const documentsDocument_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.documentsDocument_idPUT);
};

const documentsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.documentsGET);
};

const documentsPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.documentsPOST);
};


module.exports = {
  document_statusesDocument_status_idDELETE,
  document_statusesDocument_status_idGET,
  document_statusesDocument_status_idPUT,
  document_statusesGET,
  document_statusesPOST,
  document_typesGET,
  document_typesPOST,
  document_typesType_idDELETE,
  document_typesType_idGET,
  document_typesType_idPUT,
  documentsDocument_idDELETE,
  documentsDocument_idGET,
  documentsDocument_idItemsGET,
  documentsDocument_idItemsItem_idDELETE,
  documentsDocument_idItemsItem_idGET,
  documentsDocument_idItemsItem_idPUT,
  documentsDocument_idItemsPOST,
  documentsDocument_idPUT,
  documentsGET,
  documentsPOST,
};
