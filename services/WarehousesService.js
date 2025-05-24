/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get all warehouses
*
* returns List
* */
const warehousesGET = () => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(`SELECT * FROM "warehouse"`);
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
* Create a new warehouse
*
* warehouseCreate WarehouseCreate 
* returns Warehouse
* */
const warehousesPOST = ({ warehouseCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      const {
        name,
        address,
        total_capacity,
        current_utilization,
        status
      } = warehouseCreate.body;

      const { rows } = await pool.query(
        `INSERT INTO "warehouse" (
          name, address, total_capacity, 
          current_utilization, status, created_at, update_at
        ) VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
        RETURNING *`,
        [name, address, total_capacity, current_utilization, status]
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
* Delete warehouse
*
* warehouseUnderscoreid Integer 
* no response value expected for this operation
* */
const warehousesWarehouse_idDELETE = ({ warehouseUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `DELETE FROM "warehouse" 
        WHERE warehouse_id = $1 
        RETURNING *`,
        [warehouseUnderscoreid]
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
* Get warehouse by ID
*
* warehouseUnderscoreid Integer 
* returns Warehouse
* */
const warehousesWarehouse_idGET = ({ warehouseUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT * FROM "warehouse" 
        WHERE warehouse_id = $1`,
        [warehouseUnderscoreid]
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
* Update warehouse
*
* warehouseUnderscoreid Integer 
* warehouseUpdate WarehouseUpdate 
* returns Warehouse
* */
const warehousesWarehouse_idPUT = ({ warehouseUnderscoreid, warehouseUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      const { warehouse_id } = warehouseUnderscoreid;
      const {
        name,
        address,
        total_capacity,
        current_utilization,
        status
      } = warehouseUpdate.body;

      const { rows } = await pool.query(
        `UPDATE "warehouse" 
        SET 
          name = $1,
          address = $2,
          total_capacity = $3,
          current_utilization = $4,
          status = $5,
          update_at = NOW()
        WHERE warehouse_id = $6
        RETURNING *`,
        [name, address, total_capacity, 
         current_utilization, status, warehouse_id]
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
  warehousesGET,
  warehousesPOST,
  warehousesWarehouse_idDELETE,
  warehousesWarehouse_idGET,
  warehousesWarehouse_idPUT,
};
