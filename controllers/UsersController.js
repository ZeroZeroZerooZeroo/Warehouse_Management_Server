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
const role_id = Number(request.params.role_id);
  
  if (isNaN(role_id)) {
    return response.status(400).json({ error: "Invalid role ID" });
  }

  try {
    const result = await service.rolesRole_idDELETE(role_id);
    
    response.status(204).end();
  } catch (e) {
    response.status(e.status || 500).json({ 
      error: e.message || 'Internal server error' 
    });
  }

};

const rolesRole_idGET = async (request, response) => {
 const role_id = Number(request.params.role_id);
  
  if (isNaN(role_id)) {
    return response.status(400).json({ error: "Invalid role ID" });
  }

  try {
    const roleData = await service.rolesRole_idGET(role_id);
    response.status(200).json(roleData);  
  } catch (e) {
    response.status(e.status || 500).json({ error: e.message });
  }

};

const rolesRole_idPUT = async (request, response) => {
 try {
    const role_id = Number(request.params.role_id);
    if (isNaN(role_id)) {
      return response.status(400).json({ error: "Invalid role ID" });
    }

    const updateData = request.body;

    const result = await service.rolesRole_idPUT(role_id, updateData);
    response.status(200).json(result.data);
  } catch (e) {
    response.status(e.status || 500).json({ error: e.message });
  }
};

const usersGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersGET);
};

const usersPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersPOST);
};

const usersUser_idDELETE = async (request, response) => {
const user_id = Number(request.params.user_id);
  
  if (isNaN(user_id)) {
    return response.status(400).json({ error: "Invalid user ID" });
  }

  try {
    const result = await service.usersUser_idDELETE(user_id);
    
    response.status(204).end();
  } catch (e) {
    response.status(e.status || 500).json({ 
      error: e.message || 'Internal server error' 
    });
  }
};

const usersUser_idGET = async (request, response) => {
 const user_id = Number(request.params.user_id);
  
  if (isNaN(user_id)) {
    return response.status(400).json({ error: "Invalid user ID" });
  }

  try {
    const userData = await service.usersUser_idGET(user_id);
    response.status(200).json(userData);  
  } catch (e) {
    response.status(e.status || 500).json({ error: e.message });
  }

  
};

const usersUser_idPUT = async (request, response) => {
 try {
    const user_id = Number(request.params.user_id);
    if (isNaN(user_id)) {
      return response.status(400).json({ error: "Invalid user ID" });
    }

    const updateData = request.body;

    const result = await service.usersUser_idPUT(user_id, updateData);
    response.status(200).json(result.data);
  } catch (e) {
    response.status(e.status || 500).json({ error: e.message });
  }
};
const usersLoginPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.usersLoginPOST);
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
  usersLoginPOST,
};
