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
      const { rows } = await pool.query(
        `SELECT * FROM "user_profile"
        WHERE user_id = $1`,
        [userUnderscoreid]
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
* Create user profile
*
* userUnderscoreid Integer 
* userProfileCreate UserProfileCreate 
* returns UserProfile
* */
const usersUser_idProfilePOST = ({ userUnderscoreid, userProfileCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      const { user_id } = userUnderscoreid;
      const {
        full_name,
        phone,
        position,
        department,
        birth_date,
        avatar_path,
        role_id
      } = userProfileCreate.body;

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
const usersUser_idProfilePUT = ({ userUnderscoreid, userProfileUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      const { user_id } = userUnderscoreid;
      const {
        full_name,
        phone,
        position,
        department,
        birth_date,
        avatar_path
      } = userProfileUpdate.body;

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
  usersUser_idProfileGET,
  usersUser_idProfilePOST,
  usersUser_idProfilePUT,
};
