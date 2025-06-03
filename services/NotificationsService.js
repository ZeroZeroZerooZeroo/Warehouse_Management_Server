/* eslint-disable no-unused-vars */
const Service = require('./Service');
const pool = require('../db');
/**
* Get all notifications
*
* returns List
* */
const notificationsGET = () => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT 
          n.*,
          u.username AS recipient
        FROM "notification" n
        LEFT JOIN "user_notification" un ON n.notification_id = un.notification_id
        LEFT JOIN "user" u ON un.user_id = u.user_id`
      );
      resolve(Service.successResponse(rows));
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
const notificationsNotification_idDELETE = ( notification_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `DELETE FROM "notification" 
        WHERE notification_id = $1 
        RETURNING *`,
        [notification_id]
      );
      resolve(Service.successResponse(rows[0]));
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
const notificationsNotification_idGET = ( notification_id ) => new Promise(
  async (resolve, reject) => {
    try {
     const { rows } = await pool.query(
        `SELECT * FROM "notification" 
        WHERE notification_id = $1`,
        [notification_id]
      );

if (rows.length === 0) {
        return reject(Service.rejectResponse('Notification not found', 404));
      }

      resolve(rows[0]);
    } catch (e) {
      reject(Service.rejectResponse(
       e.message || 'Database error',
        e.status || 500,
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
const notificationsNotification_idPUT = ( notification_id,updateData  ) => new Promise(
  async (resolve, reject) => {
    try {

  if (typeof notification_id !== 'number' || isNaN(notification_id)) {
        return reject(Service.rejectResponse('Invalid notification ID', 400));
      }

      const { title, message, is_read } = updateData;

      const { rows } = await pool.query(
        `UPDATE "notification" 
        SET 
          title = $1,
          message = $2,
          is_read = $3
        WHERE notification_id = $4
        RETURNING *`,
        [title, message, is_read, notification_id]
      );

      if (rows.length === 0) {
        return reject(Service.rejectResponse('Notification not found', 404));
      }

      resolve(Service.successResponse(rows[0]));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Database error',
        e.status || 500,
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
const notificationsPOST = ( notificationCreate ) => new Promise(
  async (resolve, reject) => {
    try {
      const { title, message, is_read } = notificationCreate.body;
      const { rows } = await pool.query(
        `INSERT INTO "notification" (title, message, is_read)
        VALUES ($1, $2, $3) 
        RETURNING *`,
        [title, message, is_read || false]
      );
      resolve(Service.successResponse(rows[0], 201));
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
