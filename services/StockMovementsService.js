/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get all movement types
*
* returns List
* */
const movement_typesGET = () => new Promise(
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
* Delete movement type
*
* movementUnderscoretypeUnderscoreid Integer 
* no response value expected for this operation
* */
const movement_typesMovement_type_idDELETE = ({ movementUnderscoretypeUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        movementUnderscoretypeUnderscoreid,
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
* Get movement type by ID
*
* movementUnderscoretypeUnderscoreid Integer 
* returns MovementType
* */
const movement_typesMovement_type_idGET = ({ movementUnderscoretypeUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        movementUnderscoretypeUnderscoreid,
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
* Update movement type
*
* movementUnderscoretypeUnderscoreid Integer 
* movementTypeUpdate MovementTypeUpdate 
* returns MovementType
* */
const movement_typesMovement_type_idPUT = ({ movementUnderscoretypeUnderscoreid, movementTypeUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        movementUnderscoretypeUnderscoreid,
        movementTypeUpdate,
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
* Create a new movement type
*
* movementTypeCreate MovementTypeCreate 
* returns MovementType
* */
const movement_typesPOST = ({ movementTypeCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        movementTypeCreate,
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
* Get all stock movements
*
* returns List
* */
const stock_movementsGET = () => new Promise(
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
* Delete stock movement
*
* movementUnderscoreid Integer 
* no response value expected for this operation
* */
const stock_movementsMovement_idDELETE = ({ movementUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        movementUnderscoreid,
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
* Get stock movement by ID
*
* movementUnderscoreid Integer 
* returns StockMovement
* */
const stock_movementsMovement_idGET = ({ movementUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        movementUnderscoreid,
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
* Update stock movement
*
* movementUnderscoreid Integer 
* stockMovementUpdate StockMovementUpdate 
* returns StockMovement
* */
const stock_movementsMovement_idPUT = ({ movementUnderscoreid, stockMovementUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        movementUnderscoreid,
        stockMovementUpdate,
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
* Create a new stock movement
*
* stockMovementCreate StockMovementCreate 
* returns StockMovement
* */
const stock_movementsPOST = ({ stockMovementCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        stockMovementCreate,
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
