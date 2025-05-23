/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get all notifications
*
* returns List
* */
const notificationsGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete notification
*
* notificationUnderscoreid Integer 
* no response value expected for this operation
* */
const notificationsNotification_idDELETE = ({ notificationUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        notificationUnderscoreid,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get notification by ID
*
* notificationUnderscoreid Integer 
* returns Notification
* */
const notificationsNotification_idGET = ({ notificationUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        notificationUnderscoreid,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update notification
*
* notificationUnderscoreid Integer 
* notificationUpdate NotificationUpdate 
* returns Notification
* */
const notificationsNotification_idPUT = ({ notificationUnderscoreid, notificationUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        notificationUnderscoreid,
        notificationUpdate,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create a new notification
*
* notificationCreate NotificationCreate 
* returns Notification
* */
const notificationsPOST = ({ notificationCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        notificationCreate,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  notificationsGET,
  notificationsNotification_idDELETE,
  notificationsNotification_idGET,
  notificationsNotification_idPUT,
  notificationsPOST,
};
