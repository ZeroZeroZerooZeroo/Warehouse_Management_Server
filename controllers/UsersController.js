/**
 * The UsersController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UsersService');
const rolesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.rolesGET);
};

const rolesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.rolesPOST);
};

const rolesRole_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.rolesRole_idDELETE);
};

const rolesRole_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.rolesRole_idGET);
};

const rolesRole_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.rolesRole_idPUT);
};

const usersGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersGET);
};

const usersPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersPOST);
};

const usersUser_idDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersUser_idDELETE);
};

const usersUser_idGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersUser_idGET);
};

const usersUser_idPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersUser_idPUT);
};


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
};
