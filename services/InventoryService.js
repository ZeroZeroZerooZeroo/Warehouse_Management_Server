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
* Delete inventory item
*
* inventoryUnderscoreid Integer 
* no response value expected for this operation
* */
const inventoryInventory_idDELETE = ({ inventoryUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inventoryUnderscoreid,
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
* Get inventory item by ID
*
* inventoryUnderscoreid Integer 
* returns Inventory
* */
const inventoryInventory_idGET = ({ inventoryUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inventoryUnderscoreid,
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
* Update inventory item
*
* inventoryUnderscoreid Integer 
* inventoryUpdate InventoryUpdate 
* returns Inventory
* */
const inventoryInventory_idPUT = ({ inventoryUnderscoreid, inventoryUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inventoryUnderscoreid,
        inventoryUpdate,
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
* Create a new inventory item
*
* inventoryCreate InventoryCreate 
* returns Inventory
* */
const inventoryPOST = ({ inventoryCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inventoryCreate,
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
  inventoryGET,
  inventoryInventory_idDELETE,
  inventoryInventory_idGET,
  inventoryInventory_idPUT,
  inventoryPOST,
};
