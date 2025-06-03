/* eslint-disable no-unused-vars */
const Service = require('./Service');
const pool = require('../db');
/**
* Delete customer
*
* customerUnderscoreid Integer 
* no response value expected for this operation
* */
const customersCustomer_idDELETE = ( customer_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `DELETE FROM "customer" 
        WHERE customer_id = $1 
        RETURNING *`,
        [customer_id]
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
const customersCustomer_idGET = (customer_id) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM "customer" 
        WHERE customer_id = $1`,
        [customer_id]
      );
      
      if (rows.length === 0) {
        return reject(Service.rejectResponse('Customer not found', 404));
      }
      
      // Возвращаем непосредственно данные, без дополнительной обертки
      resolve(rows[0]);
    } catch (e) {
      reject(Service.rejectResponse(
       e.message || 'Database error',
        e.status || 500,
      ));
    }
  }
);
/**
* Update customer
*
* customerUnderscoreid Integer 
* customerUpdate CustomerUpdate 
* returns Customer
* */
const customersCustomer_idPUT = (customer_id, updateData) => new Promise(
  async (resolve, reject) => {
    try {
      // Проверка типа ID
      if (typeof customer_id !== 'number' || isNaN(customer_id)) {
        return reject(Service.rejectResponse('Invalid customer ID', 400));
      }

      const {
        name,
        phone,
        email,
        address,
        inn,
        discount_rate,
        status,
        total_purchases
      } = updateData;

      const { rows } = await pool.query(
        `UPDATE "customer" 
        SET 
          name = COALESCE($1, name),
          phone = COALESCE($2, phone),
          email = COALESCE($3, email),
          address = COALESCE($4, address),
          inn = COALESCE($5, inn),
          discount_rate = COALESCE($6, discount_rate),
          status = COALESCE($7, status),
          last_sale_date = NOW(),
          total_purchases = COALESCE($8, total_purchases)
        WHERE customer_id = $9
        RETURNING *`,
        [
          name, 
          phone, 
          email, 
          address, 
          inn, 
          discount_rate, 
          status, 
          total_purchases, 
          customer_id
        ]
      );

      if (rows.length === 0) {
        return reject(Service.rejectResponse('Customer not found', 404));
      }
      
      resolve(Service.successResponse(rows[0]));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Database error',
        e.status || 500,
      ));
    }
  }
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
const customersPOST = ( customerCreate ) => new Promise(
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
