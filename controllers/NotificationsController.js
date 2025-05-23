/**
 * The NotificationsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationsService');
const notificationsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.notificationsGET);
};

const notificationsNotification_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.notificationsNotification_idDELETE);
};

const notificationsNotification_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.notificationsNotification_idGET);
};

const notificationsNotification_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.notificationsNotification_idPUT);
};

const notificationsPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.notificationsPOST);
};


module.exports = {
  notificationsGET,
  notificationsNotification_idDELETE,
  notificationsNotification_idGET,
  notificationsNotification_idPUT,
  notificationsPOST,
};
