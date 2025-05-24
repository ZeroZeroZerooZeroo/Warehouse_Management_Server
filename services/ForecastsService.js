/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete demand forecast
*
* forecastUnderscoreid Integer 
* no response value expected for this operation
* */
const forecastsForecast_idDELETE = ({ forecastUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `DELETE FROM "demand_forecasts" 
        WHERE forecast_id = $1 
        RETURNING *`,
        [forecastUnderscoreid]
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
const forecastsForecast_idGET = ({ forecastUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM "demand_forecasts" 
        WHERE forecast_id = $1`,
        [forecastUnderscoreid]
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
* Update demand forecast
*
* forecastUnderscoreid Integer 
* demandForecastUpdate DemandForecastUpdate 
* returns DemandForecast
* */
const forecastsForecast_idPUT = ({ forecastUnderscoreid, demandForecastUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
       const { forecast_id } = forecastUnderscoreid;
      const {
        period_start,
        period_end,
        predicted_quantity,
        record_id,
        forecasts_type_id
      } = demandForecastUpdate.body;

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
const forecastsPOST = ({ demandForecastCreate }) => new Promise(
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
const forecasts_typesForecasts_type_idDELETE = ({ forecastsUnderscoretypeUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `DELETE FROM "farecasts_type" 
        WHERE forecasts_type_id = $1 
        RETURNING *`,
        [forecastsUnderscoretypeUnderscoreid]
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
const forecasts_typesForecasts_type_idGET = ({ forecastsUnderscoretypeUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT * FROM "farecasts_type" 
        WHERE forecasts_type_id = $1`,
        [forecastsUnderscoretypeUnderscoreid]
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
* Update forecasts type
*
* forecastsUnderscoretypeUnderscoreid Integer 
* forecastsTypeUpdate ForecastsTypeUpdate 
* returns ForecastsType
* */
const forecasts_typesForecasts_type_idPUT = ({ forecastsUnderscoretypeUnderscoreid, forecastsTypeUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      const { forecasts_type_id } = forecastsUnderscoretypeUnderscoreid;
      const { new_name } = forecastsTypeUpdate.body;

      const { rows } = await pool.query(
        `UPDATE "farecasts_type" 
        SET name_forecasts_type = $1 
        WHERE forecasts_type_id = $2 
        RETURNING *`,
        [new_name, forecasts_type_id]
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
const forecasts_typesPOST = ({ forecastsTypeCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      const { forecasts_type_id, name_forecasts_type } = forecastsTypeCreate.body;
      const { rows } = await pool.query(
        `INSERT INTO "farecasts_type" (forecasts_type_id, name_forecasts_type)
        VALUES ($1, $2) 
        RETURNING *`,
        [forecasts_type_id, name_forecasts_type]
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
