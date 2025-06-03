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
  const user_id = Number(request.params.user_id);
    
    if (isNaN(user_id)) {
      return response.status(400).json({ error: "Invalid user ID" });
    }
  
    try {
      const userData = await service.usersUser_idProfileGET(user_id);
      response.status(200).json(userData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const usersUser_idProfilePOST = async (request, response) => {
  const user_id = Number(request.params.user_id);
  
  if (isNaN(user_id)) {
    return response.status(400).json({ error: "Invalid user ID" });
  }

  try {
    const result = await service.usersUser_idProfilePOST(
      user_id, 
      request.body  
    );
    response.status(201).json(result);
  } catch (e) {
    response.status(e.status || 500).json({ error: e.message });
  }
};

const usersUser_idProfilePUT = async (request, response) => {
  try {
      const user_id = Number(request.params.user_id);
      if (isNaN(user_id)) {
        return response.status(400).json({ error: "Invalid user ID" });
      }
  
      const updateData = request.body;
  
      const result = await service.usersUser_idProfilePUT(user_id, updateData);
      response.status(200).json(result.data);
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};


module.exports = {
  usersUser_idProfileGET,
  usersUser_idProfilePOST,
  usersUser_idProfilePUT,
};
