/**
 * The ForecastsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ForecastsService');
const forecastsForecast_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.forecastsForecast_idDELETE);
};

const forecastsForecast_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.forecastsForecast_idGET);
};

const forecastsForecast_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.forecastsForecast_idPUT);
};

const forecastsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.forecastsGET);
};

const forecastsPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.forecastsPOST);
};

const forecasts_typesForecasts_type_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.forecasts_typesForecasts_type_idDELETE);
};

const forecasts_typesForecasts_type_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.forecasts_typesForecasts_type_idGET);
};

const forecasts_typesForecasts_type_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.forecasts_typesForecasts_type_idPUT);
};

const forecasts_typesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.forecasts_typesGET);
};

const forecasts_typesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.forecasts_typesPOST);
};


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
