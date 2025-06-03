/* eslint-disable no-unused-vars */
const Service = require('./Service');
const pool = require('../db');
/**
* Get all movement types
*
* returns List
* */
const movement_typesGET = () => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(`SELECT * FROM "movement_type"`);
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
* Delete movement type
*
* movementUnderscoretypeUnderscoreid Integer 
* no response value expected for this operation
* */
const movement_typesMovement_type_idDELETE = ( movement_type_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `DELETE FROM "movement_type" 
        WHERE movement_type_id = $1 
        RETURNING *`,
        [movement_type_id]
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
* Get movement type by ID
*
* movementUnderscoretypeUnderscoreid Integer 
* returns MovementType
* */
const movement_typesMovement_type_idGET = ( movement_type_id ) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT * FROM "movement_type" 
        WHERE movement_type_id = $1`,
        [movement_type_id]
      );

      if (rows.length === 0) {
        return reject(Service.rejectResponse('Movment type not found', 404));
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
* Update movement type
*
* movementUnderscoretypeUnderscoreid Integer 
* movementTypeUpdate MovementTypeUpdate 
* returns MovementType
* */
const movement_typesMovement_type_idPUT = ( movement_type_id, updateData ) => new Promise(
  async (resolve, reject) => {
    try {
      if (typeof movement_type_id !== 'number' || isNaN(movement_type_id)) {
        return reject(Service.rejectResponse('Invalid movment type ID', 400));
      }
      const { new_movement_type } = updateData;

      const { rows } = await pool.query(
        `UPDATE "movement_type" 
        SET movement_type = $1 
        WHERE movement_type_id = $2 
        RETURNING *`,
        [new_movement_type, movement_type_id]
      );

      if (rows.length === 0) {
        return reject(Service.rejectResponse('Movment type not found', 404));
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
* Create a new movement type
*
* movementTypeCreate MovementTypeCreate 
* returns MovementType
* */
const movement_typesPOST = ( movementTypeCreate ) => new Promise(
  async (resolve, reject) => {
    try {
      const { movement_type } = movementTypeCreate.body;
      const { rows } = await pool.query(
        `INSERT INTO "movement_type" (movement_type )
        VALUES ($1) 
        RETURNING *`,
        [movement_type]
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
* Get all stock movements
*
* returns List
* */
const stock_movementsGET = () => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT 
          sm.*,
          mt.movement_type AS type_name
        FROM "stock_movements" sm
        JOIN "movement_type" mt ON sm.movement_type_id = mt.movement_type_id`
      );
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
* Delete stock movement
*
* movementUnderscoreid Integer 
* no response value expected for this operation
* */
const stock_movementsMovement_idDELETE = ( movement_id ) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `DELETE FROM "stock_movements" 
        WHERE movement_id = $1 
        RETURNING *`,
        [movement_id]
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
* Get stock movement by ID
*
* movementUnderscoreid Integer 
* returns StockMovement
* */
const stock_movementsMovement_idGET = ( movement_id ) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT * FROM "stock_movements" 
        WHERE movement_id = $1`,
        [movement_id]
      );
        if (rows.length === 0) {
        return reject(Service.rejectResponse('Movement not found', 404));
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
* Update stock movement
*
* movementUnderscoreid Integer 
* stockMovementUpdate StockMovementUpdate 
* returns StockMovement
* */
const stock_movementsMovement_idPUT = ( movement_id, updateData ) => new Promise(
  async (resolve, reject) => {
    try {
    if (typeof movement_id !== 'number' || isNaN(movement_id)) {
        return reject(Service.rejectResponse('Invalid movement ID', 400));
      }
      const { 
        quantity, 
        movement_type, 
        cost, 
        comments, 
        movement_type_id 
      } = updateData;

      const { rows } = await pool.query(
        `UPDATE "stock_movements" 
        SET 
          quantity = $1,
          movement_type = $2,
          cost = $3,
          comments = $4,
          movement_type_id = $5
        WHERE movement_id = $6
        RETURNING *`,
        [quantity, movement_type, cost, comments, movement_type_id, movement_id]
      );

 if (rows.length === 0) {
        return reject(Service.rejectResponse('Movement not found', 404));
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
* Create a new stock movement
*
* stockMovementCreate StockMovementCreate 
* returns StockMovement
* */
const stock_movementsPOST = ( stockMovementCreate ) => new Promise(
  async (resolve, reject) => {
    try {
      const { 
        quantity, 
        movement_type, 
        cost, 
        comments, 
        movement_type_id 
      } = stockMovementCreate.body;

      const { rows } = await pool.query(
        `INSERT INTO "stock_movements" (
          quantity, movement_type, date_operation, 
          cost, comments, movement_type_id
        ) VALUES ($1, $2, NOW(), $3, $4, $5)
        RETURNING *`,
        [quantity, movement_type, cost, comments, movement_type_id]
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
  movement_typesGET,
  movement_typesMovement_type_idDELETE,
  movement_typesMovement_type_idGET,
  movement_typesMovement_type_idPUT,
  movement_typesPOST,
  stock_movementsGET,
  stock_movementsMovement_idDELETE,
  stock_movementsMovement_idGET,
  stock_movementsMovement_idPUT,
  stock_movementsPOST,
};
