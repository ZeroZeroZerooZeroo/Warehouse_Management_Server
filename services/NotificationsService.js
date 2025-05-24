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
const notificationsNotification_idDELETE = ({ notificationUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `DELETE FROM "notification" 
        WHERE notification_id = $1 
        RETURNING *`,
        [notificationUnderscoreid]
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
const notificationsNotification_idGET = ({ notificationUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
     const { rows } = await pool.query(
        `SELECT * FROM "notification" 
        WHERE notification_id = $1`,
        [notificationUnderscoreid]
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
* Update notification
*
* notificationUnderscoreid Integer 
* notificationUpdate NotificationUpdate 
* returns Notification
* */
const notificationsNotification_idPUT = ({ notificationUnderscoreid, notificationUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
     const { notification_id } = notificationUnderscoreid;
      const { title, message, is_read } = notificationUpdate.body;

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
* Create a new notification
*
* notificationCreate NotificationCreate 
* returns Notification
* */
const notificationsPOST = ({ notificationCreate }) => new Promise(
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
