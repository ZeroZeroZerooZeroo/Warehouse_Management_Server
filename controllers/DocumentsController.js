/**
 * The DocumentsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DocumentsService');
const document_statusesDocument_status_idDELETE = async (request, response) => {
   const document_status_id = Number(request.params.document_status_id);
    
    if (isNaN(document_status_id)) {
      return response.status(400).json({ error: "Invalid document status ID" });
    }
  
    try {
      const result = await service.document_statusesDocument_status_idDELETE(document_status_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const document_statusesDocument_status_idGET = async (request, response) => {
    const document_status_id = Number(request.params.document_status_id);
    
    if (isNaN(document_status_id)) {
      return response.status(400).json({ error: "Invalid document status ID" });
    }
  
    try {
      const documentstatusData = await service.document_statusesDocument_status_idGET(document_status_id);
      response.status(200).json(documentstatusData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const document_statusesDocument_status_idPUT = async (request, response) => {
   try {
      const document_status_id = Number(request.params.document_status_id);
      if (isNaN(document_status_id)) {
        return response.status(400).json({ error: "Invalid document status ID" });
      }
  
      const updateData = request.body;
  
      const result = await service.document_statusesDocument_status_idPUT(document_status_id, updateData);
      response.status(200).json(result.data);
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const document_statusesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_statusesGET);
};

const document_statusesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_statusesPOST);
};



const document_typesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_typesGET);
};

const document_typesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.document_typesPOST);
};

const document_typesType_idDELETE = async (request, response) => {
    const type_id = Number(request.params.type_id);
    
    if (isNaN(type_id)) {
      return response.status(400).json({ error: "Invalid document types ID" });
    }
  
    try {
      const result = await service.document_typesType_idDELETE(type_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const document_typesType_idGET = async (request, response) => {
  const type_id = Number(request.params.type_id);
    
    if (isNaN(type_id)) {
      return response.status(400).json({ error: "Invalid document types ID" });
    }
  
    try {
      const typesData = await service.document_typesType_idGET(type_id);
      response.status(200).json(typesData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const document_typesType_idPUT = async (request, response) => {
  try {
     const type_id = Number(request.params.type_id);
     if (isNaN(type_id)) {
       return response.status(400).json({ error: "Invalid document types ID" });
     }
 
     const updateData = request.body;
 
     const result = await service.document_typesType_idPUT(type_id, updateData);
     response.status(200).json(result.data);
   } catch (e) {
     response.status(e.status || 500).json({ error: e.message });
   }
};

const documentsDocument_idDELETE = async (request, response) => {
   const document_id = Number(request.params.document_id);
    
    if (isNaN(document_id)) {
      return response.status(400).json({ error: "Invalid document ID" });
    }
  
    try {
      const result = await service.documentsDocument_idDELETE(document_id);
      
      response.status(204).end();
    } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
    }
};

const documentsDocument_idGET = async (request, response) => {
   const document_id = Number(request.params.document_id);
    
    if (isNaN(document_id)) {
      return response.status(400).json({ error: "Invalid document ID" });
    }
  
    try {
      const documentData = await service.documentsDocument_idGET(document_id);
      response.status(200).json(documentData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const documentsDocument_idItemsGET = async (request, response) => {
  const document_id = Number(request.params.document_id);
    
    if (isNaN(document_id)) {
      return response.status(400).json({ error: "Invalid document ID" });
    }
  
    try {
      const documentData = await service.documentsDocument_idItemsGET(document_id);
      response.status(200).json(documentData);  
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
   

};

const documentsDocument_idItemsItem_idDELETE = async (request, response) => {
   const document_id = Number(request.params.document_id);
  const item_id = Number(request.params.item_id);

  if (isNaN(document_id) || isNaN(item_id)) {
    return response.status(400).json({ error: "Invalid document ID or item ID" });
  }

  try {
    await service.documentsDocument_idItemsItem_idDELETE(document_id, item_id);
    response.status(204).end();
  } catch (e) {
      response.status(e.status || 500).json({ 
        error: e.message || 'Internal server error' 
      });
  }
    
   
};

const documentsDocument_idItemsItem_idGET = async (request, response) => {
      const document_id = Number(request.params.document_id);
      const item_id = Number(request.params.item_id);
      
       if (isNaN(document_id) || isNaN(item_id)) {
    return response.status(400).json({ error: "Invalid document ID or item ID" });
  }
    
      try {
        const documentItemData = await service.documentsDocument_idItemsItem_idGET(document_id, item_id);
        response.status(200).json(documentItemData);  
      } catch (e) {
        response.status(e.status || 500).json({ error: e.message });
      }

};

const documentsDocument_idItemsItem_idPUT = async (request, response) => {
   try {
        const document_id = Number(request.params.document_id);
      const item_id = Number(request.params.item_id);
       if (isNaN(document_id) || isNaN(item_id)) {
    return response.status(400).json({ error: "Invalid document ID or item ID" });
  }
  
      const updateData = request.body;
  
      const result = await service.documentsDocument_idItemsItem_idPUT(document_id, item_id, updateData);
      response.status(200).json(result.data);
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const documentsDocument_idItemsPOST = async (request, response) => {
  const document_id = Number(request.params.document_id);
    
    if (isNaN(document_id)) {
      return response.status(400).json({ error: "Invalid document ID" });
    }
  
    try {
      const result = await service.documentsDocument_idItemsPOST(
        document_id, 
        request.body  
      );
      response.status(201).json(result);
    } catch (e) {
      response.status(e.status || 500).json({ error: e.message });
    }
};

const documentsDocument_idPUT = async (request, response) => {
 try {
     const document_id = Number(request.params.document_id);
     if (isNaN(document_id)) {
       return response.status(400).json({ error: "Invalid document ID" });
     }
 
     const updateData = request.body;
 
     const result = await service.documentsDocument_idPUT(document_id, updateData);
     response.status(200).json(result.data);
   } catch (e) {
     response.status(e.status || 500).json({ error: e.message });
   }
};

const documentsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.documentsGET);
};

const documentsPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.documentsPOST);
};


module.exports = {
  document_statusesDocument_status_idDELETE,
  document_statusesDocument_status_idGET,
  document_statusesDocument_status_idPUT,
  document_statusesGET,
  document_statusesPOST,
  document_typesGET,
  document_typesPOST,
  document_typesType_idDELETE,
  document_typesType_idGET,
  document_typesType_idPUT,
  documentsDocument_idDELETE,
  documentsDocument_idGET,
  documentsDocument_idItemsGET,
  documentsDocument_idItemsItem_idDELETE,
  documentsDocument_idItemsItem_idGET,
  documentsDocument_idItemsItem_idPUT,
  documentsDocument_idItemsPOST,
  documentsDocument_idPUT,
  documentsGET,
  documentsPOST,
};
