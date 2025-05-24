/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete customer
*
* customerUnderscoreid Integer 
* no response value expected for this operation
* */
const customersCustomer_idDELETE = ({ customerUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `DELETE FROM "customer" 
        WHERE customer_id = $1 
        RETURNING *`,
        [customerUnderscoreid]
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
* Get customer by ID
*
* customerUnderscoreid Integer 
* returns Customer
* */
const customersCustomer_idGET = ({ customerUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT * FROM "customer" 
        WHERE customer_id = $1`,
        [customerUnderscoreid]
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
* Update customer
*
* customerUnderscoreid Integer 
* customerUpdate CustomerUpdate 
* returns Customer
* */
const customersCustomer_idPUT = ({ customerUnderscoreid, customerUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      const { customer_id } = customerUnderscoreid;
      const {
        name,
        phone,
        email,
        address,
        inn,
        discount_rate,
        status,
        total_purchases
      } = customerUpdate.body;

      const { rows } = await pool.query(
        `UPDATE "customer" 
        SET 
          name = $1,
          phone = $2,
          email = $3,
          address = $4,
          inn = $5,
          discount_rate = $6,
          status = $7,
          last_sale_date = NOW(),
          total_purchases = $8
        WHERE customer_id = $9
        RETURNING *`,
        [name, phone, email, address, inn, discount_rate, status, total_purchases, customer_id]
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
* Get all customers
*
* returns List
* */
const customersGET = () => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(`SELECT * FROM "customer"`);
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
* Create a new customer
*
* customerCreate CustomerCreate 
* returns Customer
* */
const customersPOST = ({ customerCreate }) => new Promise(
  async (resolve, reject) => {
    try {
       const {
        name,
        phone,
        email,
        address,
        inn,
        discount_rate,
        status,
        total_purchases
      } = customerCreate.body;

      const { rows } = await pool.query(
        `INSERT INTO "customer" (
          name, phone, email, address, inn, 
          discount_rate, status, created_at, 
          last_sale_date, total_purchases
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW(), $8)
        RETURNING *`,
        [name, phone, email, address, inn, discount_rate, status, total_purchases]
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
  customersCustomer_idDELETE,
  customersCustomer_idGET,
  customersCustomer_idPUT,
  customersGET,
  customersPOST,
};
