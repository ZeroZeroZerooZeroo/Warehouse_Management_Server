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
* Create a new warehouse
*
* warehouseCreate WarehouseCreate 
* returns Warehouse
* */
const warehousesPOST = ({ warehouseCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        warehouseCreate,
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
* Delete warehouse
*
* warehouseUnderscoreid Integer 
* no response value expected for this operation
* */
const warehousesWarehouse_idDELETE = ({ warehouseUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        warehouseUnderscoreid,
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
* Get warehouse by ID
*
* warehouseUnderscoreid Integer 
* returns Warehouse
* */
const warehousesWarehouse_idGET = ({ warehouseUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        warehouseUnderscoreid,
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
* Update warehouse
*
* warehouseUnderscoreid Integer 
* warehouseUpdate WarehouseUpdate 
* returns Warehouse
* */
const warehousesWarehouse_idPUT = ({ warehouseUnderscoreid, warehouseUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        warehouseUnderscoreid,
        warehouseUpdate,
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
  warehousesGET,
  warehousesPOST,
  warehousesWarehouse_idDELETE,
  warehousesWarehouse_idGET,
  warehousesWarehouse_idPUT,
};
