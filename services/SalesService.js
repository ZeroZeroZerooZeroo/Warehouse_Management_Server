/* eslint-disable no-unused-vars */
const Service = require('./Service');

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
const salesPOST = ({ salesHistoryCreate }) => new Promise(
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
const salesRecord_idDELETE = ({ recordUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
     const { rows } = await pool.query(
        `DELETE FROM "sales_history" 
        WHERE record_id = $1 
        RETURNING *`,
        [recordUnderscoreid]
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
const salesRecord_idGET = ({ recordUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT * FROM "sales_history" 
        WHERE record_id = $1`,
        [recordUnderscoreid]
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
* Update sales record
*
* recordUnderscoreid Integer 
* salesHistoryUpdate SalesHistoryUpdate 
* returns SalesHistory
* */
const salesRecord_idPUT = ({ recordUnderscoreid, salesHistoryUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
       const { record_id } = recordUnderscoreid;
      const {
        quantity,
        price,
        profit,
        product_id
      } = salesHistoryUpdate.body;

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
      resolve(Service.successResponse(rows[0]));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
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
