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
      resolve(Service.successResponse({
        customerUnderscoreid,
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
* Get customer by ID
*
* customerUnderscoreid Integer 
* returns Customer
* */
const customersCustomer_idGET = ({ customerUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        customerUnderscoreid,
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
* Update customer
*
* customerUnderscoreid Integer 
* customerUpdate CustomerUpdate 
* returns Customer
* */
const customersCustomer_idPUT = ({ customerUnderscoreid, customerUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        customerUnderscoreid,
        customerUpdate,
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
* Get all customers
*
* returns List
* */
const customersGET = () => new Promise(
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
* Create a new customer
*
* customerCreate CustomerCreate 
* returns Customer
* */
const customersPOST = ({ customerCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        customerCreate,
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
  customersCustomer_idDELETE,
  customersCustomer_idGET,
  customersCustomer_idPUT,
  customersGET,
  customersPOST,
};
