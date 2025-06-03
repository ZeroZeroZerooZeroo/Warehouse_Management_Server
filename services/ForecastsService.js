/* eslint-disable no-unused-vars */
const Service = require('./Service');
const pool = require('../db');
/**
* Delete demand forecast
*
* forecastUnderscoreid Integer 
* no response value expected for this operation
* */
const forecastsForecast_idDELETE = ( forecast_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `DELETE FROM "demand_forecasts" 
        WHERE forecast_id = $1 
        RETURNING *`,
        [forecast_id]
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
* Get demand forecast by ID
*
* forecastUnderscoreid Integer 
* returns DemandForecast
* */
const forecastsForecast_idGET = ( forecast_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM "demand_forecasts" 
        WHERE forecast_id = $1`,
        [forecast_id]
      );
      if (rows.length === 0) {
        return reject(Service.rejectResponse('Forecast not found', 404));
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
* Update demand forecast
*
* forecastUnderscoreid Integer 
* demandForecastUpdate DemandForecastUpdate 
* returns DemandForecast
* */
const forecastsForecast_idPUT = ( forecast_id, updateData ) => new Promise(
  async (resolve, reject) => {
    try {
       if (typeof forecast_id !== 'number' || isNaN(forecast_id)) {
        return reject(Service.rejectResponse('Invalid forecast ID', 400));
      }
      const {
        period_start,
        period_end,
        predicted_quantity,
        record_id,
        forecasts_type_id
      } = updateData;

      const { rows } = await pool.query(
        `UPDATE "demand_forecasts" 
        SET 
          period_start = $1,
          period_end = $2,
          predicted_quantity = $3,
          record_id = $4,
          forecasts_type_id = $5
        WHERE forecast_id = $6
        RETURNING *`,
        [period_start, period_end, predicted_quantity, record_id, forecasts_type_id, forecast_id]
      );

if (rows.length === 0) {
        return reject(Service.rejectResponse('Forecast not found', 404));
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
* Get all demand forecasts
*
* returns List
* */
const forecastsGET = () => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT 
          df.*,
          ft.name_forecasts_type AS type_name
        FROM "demand_forecasts" df
        JOIN "farecasts_type" ft ON df.forecasts_type_id = ft.forecasts_type_id`
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
* Create a new demand forecast
*
* demandForecastCreate DemandForecastCreate 
* returns DemandForecast
* */
const forecastsPOST = ( demandForecastCreate ) => new Promise(
  async (resolve, reject) => {
    try {
      const {
        period_start,
        period_end,
        predicted_quantity,
        record_id,
        forecasts_type_id
      } = demandForecastCreate.body;

      const { rows } = await pool.query(
        `INSERT INTO "demand_forecasts" (
          forecast_date, period_start, period_end, 
          predicted_quantity, record_id, forecasts_type_id
        ) VALUES (NOW(), $1, $2, $3, $4, $5)
        RETURNING *`,
        [period_start, period_end, predicted_quantity, record_id, forecasts_type_id]
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
* Delete forecasts type
*
* forecastsUnderscoretypeUnderscoreid Integer 
* no response value expected for this operation
* */
const forecasts_typesForecasts_type_idDELETE = ( forecasts_type_id ) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `DELETE FROM "farecasts_type" 
        WHERE forecasts_type_id = $1 
        RETURNING *`,
        [forecasts_type_id]
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
* Get forecasts type by ID
*
* forecastsUnderscoretypeUnderscoreid Integer 
* returns ForecastsType
* */
const forecasts_typesForecasts_type_idGET = ( forecasts_type_id ) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT * FROM "farecasts_type" 
        WHERE forecasts_type_id = $1`,
        [forecasts_type_id]
      );

 if (rows.length === 0) {
        return reject(Service.rejectResponse('Forecasts type not found', 404));
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
* Update forecasts type
*
* forecastsUnderscoretypeUnderscoreid Integer 
* forecastsTypeUpdate ForecastsTypeUpdate 
* returns ForecastsType
* */
const forecasts_typesForecasts_type_idPUT = ( forecasts_type_id, updateData ) => new Promise(
  async (resolve, reject) => {
    try {


       if (typeof forecasts_type_id !== 'number' || isNaN(forecasts_type_id)) {
        return reject(Service.rejectResponse('Invalid forecasts type ID', 400));
      }
      const { new_name } = updateData;

      const { rows } = await pool.query(
        `UPDATE "farecasts_type" 
        SET name_forecasts_type = $1 
        WHERE forecasts_type_id = $2 
        RETURNING *`,
        [new_name, forecasts_type_id]
      );

         if (rows.length === 0) {
        return reject(Service.rejectResponse('Forecasts type not found', 404));
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
* Get all forecasts types
*
* returns List
* */
const forecasts_typesGET = () => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(`SELECT * FROM "farecasts_type"`);
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
* Create a new forecasts type
*
* forecastsTypeCreate ForecastsTypeCreate 
* returns ForecastsType
* */
const forecasts_typesPOST = ( forecastsTypeCreate ) => new Promise(
  async (resolve, reject) => {
    try {
      const { name_forecasts_type } = forecastsTypeCreate.body;
      

      const { rows } = await pool.query(
        `INSERT INTO "farecasts_type" (name_forecasts_type)
        VALUES ($1) 
        RETURNING *`, 
        [name_forecasts_type]
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
  forecastsForecast_idDELETE,
  forecastsForecast_idGET,
  forecastsForecast_idPUT,
  forecastsGET,
  forecastsPOST,
  forecasts_typesForecasts_type_idDELETE,
  forecasts_typesForecasts_type_idGET,
  forecasts_typesForecasts_type_idPUT,
  forecasts_typesGET,
  forecasts_typesPOST,
};
