/**
 * The CustomersController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CustomersService');
const customersCustomer_idDELETE = async (request, response) => {
  const customer_id = Number(request.params.customer_id);
  
  if (isNaN(customer_id)) {
    return response.status(400).json({ error: "Invalid customer ID" });
  }

  try {
    const result = await service.customersCustomer_idDELETE(customer_id);
    
    response.status(204).end();
  } catch (e) {
    response.status(e.status || 500).json({ 
      error: e.message || 'Internal server error' 
    });
  }
};

const customersCustomer_idGET = async (request, response) => {
  const customer_id = Number(request.params.customer_id);
  
  if (isNaN(customer_id)) {
    return response.status(400).json({ error: "Invalid customer ID" });
  }

  try {
    const customerData = await service.customersCustomer_idGET(customer_id);
    response.status(200).json(customerData);  
  } catch (e) {
    response.status(e.status || 500).json({ error: e.message });
  }
};
const customersCustomer_idPUT = async (request, response) => {
  try {
    const customer_id = Number(request.params.customer_id);
    if (isNaN(customer_id)) {
      return response.status(400).json({ error: "Invalid customer ID" });
    }

    const updateData = request.body;

    const result = await service.customersCustomer_idPUT(customer_id, updateData);
    response.status(200).json(result.data);
  } catch (e) {
    response.status(e.status || 500).json({ error: e.message });
  }
};

const customersGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.customersGET);
};

const customersPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.customersPOST);
};


module.exports = {
  customersCustomer_idDELETE,
  customersCustomer_idGET,
  customersCustomer_idPUT,
  customersGET,
  customersPOST,
};
