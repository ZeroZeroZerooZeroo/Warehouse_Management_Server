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
   const notification_id = Number(request.params.notification_id);
    
    if (isNaN(notification_id)) {
      return response.status(400).json({ error: "Invalid notification ID" });
    }
  
    try {
      const result = await service.notificationsNotification_idDELETE(notification_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const notificationsNotification_idGET = async (request, response) => {
   const notification_id = Number(request.params.notification_id);
    
    if (isNaN(notification_id)) {
      return response.status(400).json({ error: "Invalid notification ID" });
    }
  
    try {
      const notificationData = await service.notificationsNotification_idGET(notification_id);
      response.status(200).json(notificationData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const notificationsNotification_idPUT = async (request, response) => {
 try {
     const notification_id = Number(request.params.notification_id);
     if (isNaN(notification_id)) {
       return response.status(400).json({ error: "Invalid notification ID" });
     }
 
     const updateData = request.body;
 
     const result = await service.notificationsNotification_idPUT(notification_id, updateData);
     response.status(200).json(result.data);
   } catch (e) {
     response.status(e.status || 500).json({ error: e.message });
   }
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
