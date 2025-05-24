/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get all inventory items
*
* returns List
* */
const inventoryGET = () => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT 
          i.*,
          p.name AS product_name,
          w.name AS warehouse_name
        FROM "inventory" i
        LEFT JOIN "product_inventory" pi ON i.inventory_id = pi.inventory_id
        LEFT JOIN "product" p ON pi.product_id = p.product_id
        LEFT JOIN "warehouse_inventory" wi ON i.inventory_id = wi.inventory_id
        LEFT JOIN "warehouse" w ON wi.warehouse_id = w.warehouse_id`
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
* Delete inventory item
*
* inventoryUnderscoreid Integer 
* no response value expected for this operation
* */
const inventoryInventory_idDELETE = ({ inventoryUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `DELETE FROM "inventory" 
        WHERE inventory_id = $1 
        RETURNING *`,
        [inventoryUnderscoreid]
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
* Get inventory item by ID
*
* inventoryUnderscoreid Integer 
* returns Inventory
* */
const inventoryInventory_idGET = ({ inventoryUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM "inventory" 
        WHERE inventory_id = $1`,
        [inventoryUnderscoreid]
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
* Update inventory item
*
* inventoryUnderscoreid Integer 
* inventoryUpdate InventoryUpdate 
* returns Inventory
* */
const inventoryInventory_idPUT = ({ inventoryUnderscoreid, inventoryUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      const { inventory_id } = inventoryUnderscoreid;
      const { 
        quantity, 
        reserved_quantity, 
        storage_location, 
        batch_number 
      } = inventoryUpdate.body;

      const { rows } = await pool.query(
        `UPDATE "inventory" 
        SET 
          quantity = $1,
          reserved_quantity = $2,
          last_count_date = NOW(),
          storage_location = $3,
          batch_number = $4
        WHERE inventory_id = $5
        RETURNING *`,
        [quantity, reserved_quantity, storage_location, batch_number, inventory_id]
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
* Create a new inventory item
*
* inventoryCreate InventoryCreate 
* returns Inventory
* */
const inventoryPOST = ({ inventoryCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      const { 
        quantity, 
        reserved_quantity, 
        storage_location, 
        batch_number 
      } = inventoryCreate.body;

      const { rows } = await pool.query(
        `INSERT INTO "inventory" (
          quantity, reserved_quantity, last_count_date, 
          storage_location, batch_number
        ) VALUES ($1, $2, NOW(), $3, $4)
        RETURNING *`,
        [quantity, reserved_quantity, storage_location, batch_number]
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
  inventoryGET,
  inventoryInventory_idDELETE,
  inventoryInventory_idGET,
  inventoryInventory_idPUT,
  inventoryPOST,
};
