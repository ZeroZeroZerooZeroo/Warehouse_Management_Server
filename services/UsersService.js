/* eslint-disable no-unused-vars */
const Service = require('./Service');
const pool = require('../db');
/**
* Get all user roles
*
* returns List
* */
const rolesGET = () => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT * FROM "user_role"`
      )
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
* Create a new user role
*
* userRoleCreate UserRoleCreate 
* returns UserRole
* */
const rolesPOST = ( userRoleCreate ) => new Promise(
  async (resolve, reject) => {
    try {
      const {
        role_name

      } = userRoleCreate.body;

      const { rows } = await pool.query(
        `INSERT INTO "user_role" ("Role")
        VALUES ($1)
        RETURNING *`,
        [role_name]
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
* Delete user role
*
* roleUnderscoreid Integer 
* no response value expected for this operation
* */
const rolesRole_idDELETE = ( role_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `DELETE FROM "user_role" 
        WHERE role_id = $1 
        RETURNING *`,
        [role_id]
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
* Get user role by ID
*
* roleUnderscoreid Integer 
* returns UserRole
* */
const rolesRole_idGET = ( role_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM "user_role" 
        WHERE role_id = $1`,
        [role_id]
      );
      if (rows.length === 0) {
        return reject(Service.rejectResponse('Role not found', 404));
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
* Update user role
*
* roleUnderscoreid Integer 
* userRoleUpdate UserRoleUpdate 
* returns UserRole
* */
const rolesRole_idPUT = ( role_id, updateData ) => new Promise(
  async (resolve, reject) => {
    try {
      if (typeof role_id !== 'number' || isNaN(role_id)) {
        return reject(Service.rejectResponse('Invalid role ID', 400));
      }
      const { new_role_name } = updateData;
      
      const { rows } = await pool.query(
        `UPDATE "user_role" 
        SET "Role" = $1
        WHERE role_id = $2
        RETURNING *`,
        [new_role_name, role_id]
      );
      if (rows.length === 0) {
        return reject(Service.rejectResponse('Role not found', 404));
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
/**
* Get all users
*
* returns List
* */
const usersGET = () => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT  
        u.user_id, 
        u.username,
        u.password, 
        u.email, 
        ur."Role" AS role,
        u.is_active, 
        u.created_at, 
        u.last_login,
        u.inn,
        u.organization
        FROM "user" u
        JOIN "user_role" ur ON u.role_id = ur.role_id`
      )
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
* Create a new user
*
* userCreate UserCreate 
* returns User
* */
const usersPOST = ( userCreate ) => new Promise(
  async (resolve, reject) => {

    try {
      const {
        username,
        password,
        email,
        role_id,
        is_active = true,
        inn,
        organization
      } = userCreate.body;

const { rows } = await pool.query(
  `INSERT INTO "user" (
    username, password, email, role_id, 
    is_active, created_at, last_login, inn, organization
  ) 
  VALUES ($1, $2, $3, $4, $5, NOW(), NOW(), $6, $7)
  RETURNING *`,
  [username, password, email, role_id, is_active, inn, organization]
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
* Delete user
*
* userUnderscoreid Integer 
* no response value expected for this operation
* */
const usersUser_idDELETE = ( user_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `DELETE FROM "user" 
        WHERE user_id = $1 
        RETURNING *`,
        [user_id]
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
* Get user by ID
*
* userUnderscoreid Integer 
* returns User
* */
const usersUser_idGET = ( user_id ) => new Promise(
  async (resolve, reject) => {
     try {
    const { rows } = await pool.query(
      `SELECT 
        u.*, 
        ur."Role" AS role_name,
        up.full_name, 
        up.phone, 
        up.position
        FROM "user" u
        JOIN "user_role" ur ON u.role_id = ur.role_id
        LEFT JOIN "user_profile" up 
        ON u.user_id = up.user_id AND u.role_id = up.role_id
        WHERE u.user_id = $1`,
      [user_id]
    );

    if (rows.length === 0) {
      reject(Service.rejectResponse('User not found', 404));
      return;
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
* Update user
*
* userUnderscoreid Integer 
* userUpdate UserUpdate 
* returns User
* */
const usersUser_idPUT = ( user_id, updateData ) => new Promise(
  async (resolve, reject) => {
    try {
      // Проверка типа ID
      if (typeof user_id !== 'number' || isNaN(user_id)) {
        return reject(Service.rejectResponse('Invalid user ID', 400));
      }
      const {
        username,
        password,
        email,
        role_id,
        is_active,
        inn,
        organization
      } = updateData;

      const { rows } = await pool.query(
        `UPDATE "user" 
        SET 
        username = $1, 
        password = $2, 
        email = $3, 
        role_id = $4, 
        is_active = $5, 
        inn = $6, 
        organization = $7,
        last_login = NOW()
        WHERE user_id = $8
        RETURNING *`,
        [username, password, email, role_id, is_active, inn, organization, user_id]
      );
      resolve(Service.successResponse(rows[0]));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Database error',
        e.status || 500,
      ));
    }
  },
);

const usersLoginPOST = ( LoginRequest ) => new Promise(
  async (resolve, reject) => {

    try {
      const {
        username,
        password
      } = LoginRequest.body;

const { rows } = await pool.query(
  `SELECT user_id, username, email, role_id, is_active, created_at, last_login, inn, organization 
       FROM "user" 
       WHERE username = $1 AND password = $2`,
      [username, password]
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
  usersLoginPOST,
};
