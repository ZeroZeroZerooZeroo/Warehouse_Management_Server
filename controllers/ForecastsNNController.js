const Controller = require('./Controller');
const service = require('../services/ForecastsNNService');
const { request } = require('express');

const generateDemandForecast = async (request,response) => {
    await Controller.handleRequest(request, response, service.generateDemandForecast);
};

module.exports = {
    generateDemandForecast,
}