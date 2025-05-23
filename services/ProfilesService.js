/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get user profile
*
* userUnderscoreid Integer 
* returns UserProfile
* */
const usersUser_idProfileGET = ({ userUnderscoreid }) => new Promise(
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
* Create user profile
*
* userUnderscoreid Integer 
* userProfileCreate UserProfileCreate 
* returns UserProfile
* */
const usersUser_idProfilePOST = ({ userUnderscoreid, userProfileCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userUnderscoreid,
        userProfileCreate,
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
* Update user profile
*
* userUnderscoreid Integer 
* userProfileUpdate UserProfileUpdate 
* returns UserProfile
* */
const usersUser_idProfilePUT = ({ userUnderscoreid, userProfileUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userUnderscoreid,
        userProfileUpdate,
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
  usersUser_idProfileGET,
  usersUser_idProfilePOST,
  usersUser_idProfilePUT,
};
