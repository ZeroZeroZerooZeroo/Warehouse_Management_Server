/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get all suppliers
*
* returns List
* */
const suppliersGET = () => new Promise(
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
* Create a new supplier
*
* supplierCreate SupplierCreate 
* returns Supplier
* */
const suppliersPOST = ({ supplierCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        supplierCreate,
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
* Delete supplier
*
* supplierUnderscoreid Integer 
* no response value expected for this operation
* */
const suppliersSupplier_idDELETE = ({ supplierUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        supplierUnderscoreid,
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
* Get supplier by ID
*
* supplierUnderscoreid Integer 
* returns Supplier
* */
const suppliersSupplier_idGET = ({ supplierUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        supplierUnderscoreid,
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
* Update supplier
*
* supplierUnderscoreid Integer 
* supplierUpdate SupplierUpdate 
* returns Supplier
* */
const suppliersSupplier_idPUT = ({ supplierUnderscoreid, supplierUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        supplierUnderscoreid,
        supplierUpdate,
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
  suppliersGET,
  suppliersPOST,
  suppliersSupplier_idDELETE,
  suppliersSupplier_idGET,
  suppliersSupplier_idPUT,
};
