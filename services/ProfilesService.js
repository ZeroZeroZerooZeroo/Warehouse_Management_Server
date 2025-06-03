/* eslint-disable no-unused-vars */
const Service = require('./Service');
const pool = require('../db');
/**
* Get user profile
*
* userUnderscoreid Integer 
* returns UserProfile
* */
const usersUser_idProfileGET = ( user_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM "user_profile"
        WHERE user_id = $1`,
        [user_id]
      );

if (rows.length === 0) {
        return reject(Service.rejectResponse('User not found', 404));
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
* Create user profile
*
* userUnderscoreid Integer 
* userProfileCreate UserProfileCreate 
* returns UserProfile
* */
const usersUser_idProfilePOST = ( user_id, userProfileCreate ) => new Promise(
  async (resolve, reject) => {
    try {
      const {
        full_name,
        phone,
        position,
        department,
        birth_date,
        avatar_path,
        role_id
      } = userProfileCreate;

      const { rows } = await pool.query(
        `INSERT INTO "user_profile" (
          full_name, phone, position, department, 
          birth_date, avatar_path, user_id, role_id
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *`,
        [full_name, phone, position, department, 
         birth_date, avatar_path, user_id, role_id]
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
* Update user profile
*
* userUnderscoreid Integer 
* userProfileUpdate UserProfileUpdate 
* returns UserProfile
* */
const usersUser_idProfilePUT = ( user_id, updateData ) => new Promise(
  async (resolve, reject) => {
    try {

if (typeof user_id !== 'number' || isNaN(user_id)) {
        return reject(Service.rejectResponse('Invalid user ID', 400));
      }

      const {
        full_name,
        phone,
        position,
        department,
        birth_date,
        avatar_path
      } = updateData;

      const { rows } = await pool.query(
        `UPDATE "user_profile" 
        SET 
          full_name = $1,
          phone = $2,
          position = $3,
          department = $4,
          birth_date = $5,
          avatar_path = $6
        WHERE user_id = $7
        RETURNING *`,
        [full_name, phone, position, department, 
         birth_date, avatar_path, user_id]
      );

 if (rows.length === 0) {
        return reject(Service.rejectResponse('USer not found', 404));
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
  usersUser_idProfileGET,
  usersUser_idProfilePOST,
  usersUser_idProfilePUT,
};
