/* eslint-disable no-unused-vars */
const Service = require('./Service');
const pool = require('../db');
/**
* Get all sales records
*
* returns List
* */
const salesGET = () => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT 
          sh.*,
          p.name AS product_name
        FROM "sales_history" sh
        LEFT JOIN "product" p ON sh.product_id = p.product_id`
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
* Create a new sales record
*
* salesHistoryCreate SalesHistoryCreate 
* returns SalesHistory
* */
const salesPOST = ( salesHistoryCreate ) => new Promise(
  async (resolve, reject) => {
    try {
      const {
        quantity,
        price,
        profit,
        product_id
      } = salesHistoryCreate.body;

      const { rows } = await pool.query(
        `INSERT INTO "sales_history" (
          date, quantity, price, profit, product_id
        ) VALUES (NOW(), $1, $2, $3, $4)
        RETURNING *`,
        [quantity, price, profit, product_id]
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
/**
* Delete sales record
*
* recordUnderscoreid Integer 
* no response value expected for this operation
* */
const salesRecord_idDELETE = ( record_id ) => new Promise(
  async (resolve, reject) => {
    try {
     const { rows } = await pool.query(
        `DELETE FROM "sales_history" 
        WHERE record_id = $1 
        RETURNING *`,
        [record_id]
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
* Get sales record by ID
*
* recordUnderscoreid Integer 
* returns SalesHistory
* */
const salesRecord_idGET = ( record_id ) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT * FROM "sales_history" 
        WHERE record_id = $1`,
        [record_id]
      );
       if (rows.length === 0) {
        return reject(Service.rejectResponse('Record not found', 404));
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
* Update sales record
*
* recordUnderscoreid Integer 
* salesHistoryUpdate SalesHistoryUpdate 
* returns SalesHistory
* */
const salesRecord_idPUT = ( record_id, updateData ) => new Promise(
  async (resolve, reject) => {
    try {

      if (typeof record_id !== 'number' || isNaN(record_id)) {
        return reject(Service.rejectResponse('Invalid record ID', 400));
      }
      const {
        quantity,
        price,
        profit,
        product_id
      } = updateData;

      const { rows } = await pool.query(
        `UPDATE "sales_history" 
        SET 
          quantity = $1,
          price = $2,
          profit = $3,
          product_id = $4
        WHERE record_id = $5
        RETURNING *`,
        [quantity, price, profit, product_id, record_id]
      );
       if (rows.length === 0) {
        return reject(Service.rejectResponse('Record not found', 404));
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

module.exports = {
  salesGET,
  salesPOST,
  salesRecord_idDELETE,
  salesRecord_idGET,
  salesRecord_idPUT,
};
