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
* Create a new sales record
*
* salesHistoryCreate SalesHistoryCreate 
* returns SalesHistory
* */
const salesPOST = ({ salesHistoryCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        salesHistoryCreate,
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
* Delete sales record
*
* recordUnderscoreid Integer 
* no response value expected for this operation
* */
const salesRecord_idDELETE = ({ recordUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recordUnderscoreid,
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
* Get sales record by ID
*
* recordUnderscoreid Integer 
* returns SalesHistory
* */
const salesRecord_idGET = ({ recordUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recordUnderscoreid,
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
* Update sales record
*
* recordUnderscoreid Integer 
* salesHistoryUpdate SalesHistoryUpdate 
* returns SalesHistory
* */
const salesRecord_idPUT = ({ recordUnderscoreid, salesHistoryUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recordUnderscoreid,
        salesHistoryUpdate,
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
  salesGET,
  salesPOST,
  salesRecord_idDELETE,
  salesRecord_idGET,
  salesRecord_idPUT,
};
