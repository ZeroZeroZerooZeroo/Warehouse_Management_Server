/* eslint-disable no-unused-vars */
const Service = require('./Service');
const pool = require('../db');
/**
* Get all suppliers
*
* returns List
* */
const suppliersGET = () => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(`SELECT * FROM "supplier"`);
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
* Create a new supplier
*
* supplierCreate SupplierCreate 
* returns Supplier
* */
const suppliersPOST = ( supplierCreate ) => new Promise(
  async (resolve, reject) => {
    try {
       const {
        name_company,
        name,
        phone,
        email,
        address,
        inn,
        kpp,
        bank_details
      } = supplierCreate.body;

      const { rows } = await pool.query(
        `INSERT INTO "supplier" (
          name_company, name, phone, email, 
          address, inn, kpp, bank_details, 
          update_at, last_purchase_date
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
        RETURNING *`,
        [name_company, name, phone, email, address, inn, kpp, bank_details]
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
* Delete supplier
*
* supplierUnderscoreid Integer 
* no response value expected for this operation
* */
const suppliersSupplier_idDELETE = ( supplier_id ) => new Promise(
  async (resolve, reject) => {
    try {
     const { rows } = await pool.query(
        `DELETE FROM "supplier" 
        WHERE supplier_id = $1 
        RETURNING *`,
        [supplier_id]
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
* Get supplier by ID
*
* supplierUnderscoreid Integer 
* returns Supplier
* */
const suppliersSupplier_idGET = ( supplier_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM "supplier" 
        WHERE supplier_id = $1`,
        [supplier_id]
      );
      if (rows.length === 0) {
        return reject(Service.rejectResponse('Suppliers not found', 404));
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
* Update supplier
*
* supplierUnderscoreid Integer 
* supplierUpdate SupplierUpdate 
* returns Supplier
* */
const suppliersSupplier_idPUT = ( supplier_id, updateData ) => new Promise(
  async (resolve, reject) => {
    try {
      if (typeof supplier_id !== 'number' || isNaN(supplier_id)) {
        return reject(Service.rejectResponse('Invalid supplier ID', 400));
      }
      const {
        name_company,
        name,
        phone,
        email,
        address,
        inn,
        kpp,
        bank_details
      } = updateData;

      const { rows } = await pool.query(
        `UPDATE "supplier" 
        SET 
          name_company = $1,
          name = $2,
          phone = $3,
          email = $4,
          address = $5,
          inn = $6,
          kpp = $7,
          bank_details = $8,
          update_at = NOW()
        WHERE supplier_id = $9
        RETURNING *`,
        [name_company, name, phone, email, address, inn, kpp, bank_details, supplier_id]
      );

      if (rows.length === 0) {
        return reject(Service.rejectResponse('Supplier not found', 404));
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
  suppliersGET,
  suppliersPOST,
  suppliersSupplier_idDELETE,
  suppliersSupplier_idGET,
  suppliersSupplier_idPUT,
};
