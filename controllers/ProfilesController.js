/**
 * The ProfilesController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProfilesService');
const usersUser_idProfileGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersUser_idProfileGET);
};

const usersUser_idProfilePOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersUser_idProfilePOST);
};

const usersUser_idProfilePUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersUser_idProfilePUT);
};


module.exports = {
  usersUser_idProfileGET,
  usersUser_idProfilePOST,
  usersUser_idProfilePUT,
};
