/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get all user roles
*
* returns List
* */
const rolesGET = () => new Promise(
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
* Create a new user role
*
* userRoleCreate UserRoleCreate 
* returns UserRole
* */
const rolesPOST = ({ userRoleCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userRoleCreate,
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
* Delete user role
*
* roleUnderscoreid Integer 
* no response value expected for this operation
* */
const rolesRole_idDELETE = ({ roleUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        roleUnderscoreid,
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
* Get user role by ID
*
* roleUnderscoreid Integer 
* returns UserRole
* */
const rolesRole_idGET = ({ roleUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        roleUnderscoreid,
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
* Update user role
*
* roleUnderscoreid Integer 
* userRoleUpdate UserRoleUpdate 
* returns UserRole
* */
const rolesRole_idPUT = ({ roleUnderscoreid, userRoleUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        roleUnderscoreid,
        userRoleUpdate,
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
* Get all users
*
* returns List
* */
const usersGET = () => new Promise(
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
* Create a new user
*
* userCreate UserCreate 
* returns User
* */
const usersPOST = ({ userCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userCreate,
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
* Delete user
*
* userUnderscoreid Integer 
* no response value expected for this operation
* */
const usersUser_idDELETE = ({ userUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userUnderscoreid,
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
* Get user by ID
*
* userUnderscoreid Integer 
* returns User
* */
const usersUser_idGET = ({ userUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userUnderscoreid,
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
* Update user
*
* userUnderscoreid Integer 
* userUpdate UserUpdate 
* returns User
* */
const usersUser_idPUT = ({ userUnderscoreid, userUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userUnderscoreid,
        userUpdate,
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
  rolesGET,
  rolesPOST,
  rolesRole_idDELETE,
  rolesRole_idGET,
  rolesRole_idPUT,
  usersGET,
  usersPOST,
  usersUser_idDELETE,
  usersUser_idGET,
  usersUser_idPUT,
};
