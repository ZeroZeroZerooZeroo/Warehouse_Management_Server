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
      resolve(Service.successResponse({
        forecastUnderscoreid,
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
* Get demand forecast by ID
*
* forecastUnderscoreid Integer 
* returns DemandForecast
* */
const forecastsForecast_idGET = ({ forecastUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        forecastUnderscoreid,
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
* Update demand forecast
*
* forecastUnderscoreid Integer 
* demandForecastUpdate DemandForecastUpdate 
* returns DemandForecast
* */
const forecastsForecast_idPUT = ({ forecastUnderscoreid, demandForecastUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        forecastUnderscoreid,
        demandForecastUpdate,
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
* Get all demand forecasts
*
* returns List
* */
const forecastsGET = () => new Promise(
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
* Create a new demand forecast
*
* demandForecastCreate DemandForecastCreate 
* returns DemandForecast
* */
const forecastsPOST = ({ demandForecastCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        demandForecastCreate,
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
* Delete forecasts type
*
* forecastsUnderscoretypeUnderscoreid Integer 
* no response value expected for this operation
* */
const forecasts_typesForecasts_type_idDELETE = ({ forecastsUnderscoretypeUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        forecastsUnderscoretypeUnderscoreid,
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
* Get forecasts type by ID
*
* forecastsUnderscoretypeUnderscoreid Integer 
* returns ForecastsType
* */
const forecasts_typesForecasts_type_idGET = ({ forecastsUnderscoretypeUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        forecastsUnderscoretypeUnderscoreid,
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
* Update forecasts type
*
* forecastsUnderscoretypeUnderscoreid Integer 
* forecastsTypeUpdate ForecastsTypeUpdate 
* returns ForecastsType
* */
const forecasts_typesForecasts_type_idPUT = ({ forecastsUnderscoretypeUnderscoreid, forecastsTypeUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        forecastsUnderscoretypeUnderscoreid,
        forecastsTypeUpdate,
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
* Get all forecasts types
*
* returns List
* */
const forecasts_typesGET = () => new Promise(
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
* Create a new forecasts type
*
* forecastsTypeCreate ForecastsTypeCreate 
* returns ForecastsType
* */
const forecasts_typesPOST = ({ forecastsTypeCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        forecastsTypeCreate,
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
