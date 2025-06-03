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
  const forecast_id = Number(request.params.forecast_id);
    
    if (isNaN(forecast_id)) {
      return response.status(400).json({ error: "Invalid forecast ID" });
    }
  
    try {
      const result = await service.forecastsForecast_idDELETE(forecast_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const forecastsForecast_idGET = async (request, response) => {
  const forecast_id = Number(request.params.forecast_id);
    
    if (isNaN(forecast_id)) {
      return response.status(400).json({ error: "Invalid forecast ID" });
    }
  
    try {
      const forecastData = await service.forecastsForecast_idGET(forecast_id);
      response.status(200).json(forecastData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const forecastsForecast_idPUT = async (request, response) => {
   try {
      const forecast_id = Number(request.params.forecast_id);
      if (isNaN(forecast_id)) {
        return response.status(400).json({ error: "Invalid forecast ID" });
      }
  
      const updateData = request.body;
  
      const result = await service.forecastsForecast_idPUT(forecast_id, updateData);
      response.status(200).json(result.data);
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const forecastsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.forecastsGET);
};

const forecastsPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.forecastsPOST);
};

const forecasts_typesForecasts_type_idDELETE = async (request, response) => {
  const forecasts_type_id = Number(request.params.forecasts_type_id);
    
    if (isNaN(forecasts_type_id)) {
      return response.status(400).json({ error: "Invalid forecasts_types ID" });
    }
  
    try {
      const result = await service.forecasts_typesForecasts_type_idDELETE(forecasts_type_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const forecasts_typesForecasts_type_idGET = async (request, response) => {
 const forecasts_type_id = Number(request.params.forecasts_type_id);
   
   if (isNaN(forecasts_type_id)) {
     return response.status(400).json({ error: "Invalid forecasts_types ID" });
   }
 
   try {
     const forecasts_typesData = await service.forecasts_typesForecasts_type_idGET(forecasts_type_id);
     response.status(200).json(forecasts_typesData);  
   } catch (e) {
     response.status(e.status || 500).json({ error: e.message });
   }
};

const forecasts_typesForecasts_type_idPUT = async (request, response) => {
 try {
     const forecasts_type_id = Number(request.params.forecasts_type_id);
     if (isNaN(forecasts_type_id)) {
       return response.status(400).json({ error: "Invalid forecasts_types ID" });
     }
 
     const updateData = request.body;
 
     const result = await service.forecasts_typesForecasts_type_idPUT(forecasts_type_id, updateData);
     response.status(200).json(result.data);
   } catch (e) {
     response.status(e.status || 500).json({ error: e.message });
   }
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
