/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete document status
*
* documentUnderscorestatusUnderscoreid Integer 
* no response value expected for this operation
* */
const document_statusesDocument_status_idDELETE = ({ documentUnderscorestatusUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentUnderscorestatusUnderscoreid,
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
* Get document status by ID
*
* documentUnderscorestatusUnderscoreid Integer 
* returns DocumentStatus
* */
const document_statusesDocument_status_idGET = ({ documentUnderscorestatusUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentUnderscorestatusUnderscoreid,
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
* Update document status
*
* documentUnderscorestatusUnderscoreid Integer 
* documentStatusUpdate DocumentStatusUpdate 
* returns DocumentStatus
* */
const document_statusesDocument_status_idPUT = ({ documentUnderscorestatusUnderscoreid, documentStatusUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentUnderscorestatusUnderscoreid,
        documentStatusUpdate,
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
* Get all document statuses
*
* returns List
* */
const document_statusesGET = () => new Promise(
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
* Create a new document status
*
* documentStatusCreate DocumentStatusCreate 
* returns DocumentStatus
* */
const document_statusesPOST = ({ documentStatusCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentStatusCreate,
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
* Get all document types
*
* returns List
* */
const document_typesGET = () => new Promise(
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
* Create a new document type
*
* documentTypeCreate DocumentTypeCreate 
* returns DocumentType
* */
const document_typesPOST = ({ documentTypeCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentTypeCreate,
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
* Delete document type
*
* typeUnderscoreid Integer 
* no response value expected for this operation
* */
const document_typesType_idDELETE = ({ typeUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        typeUnderscoreid,
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
* Get document type by ID
*
* typeUnderscoreid Integer 
* returns DocumentType
* */
const document_typesType_idGET = ({ typeUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        typeUnderscoreid,
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
* Update document type
*
* typeUnderscoreid Integer 
* documentTypeUpdate DocumentTypeUpdate 
* returns DocumentType
* */
const document_typesType_idPUT = ({ typeUnderscoreid, documentTypeUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        typeUnderscoreid,
        documentTypeUpdate,
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
* Delete document
*
* documentUnderscoreid Integer 
* no response value expected for this operation
* */
const documentsDocument_idDELETE = ({ documentUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentUnderscoreid,
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
* Get document by ID
*
* documentUnderscoreid Integer 
* returns Document
* */
const documentsDocument_idGET = ({ documentUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentUnderscoreid,
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
* Get all items for a document
*
* documentUnderscoreid Integer 
* returns List
* */
const documentsDocument_idItemsGET = ({ documentUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentUnderscoreid,
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
* Remove item from document
*
* documentUnderscoreid Integer 
* itemUnderscoreid Integer 
* no response value expected for this operation
* */
const documentsDocument_idItemsItem_idDELETE = ({ documentUnderscoreid, itemUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentUnderscoreid,
        itemUnderscoreid,
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
* Get document item by ID
*
* documentUnderscoreid Integer 
* itemUnderscoreid Integer 
* returns DocumentItem
* */
const documentsDocument_idItemsItem_idGET = ({ documentUnderscoreid, itemUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentUnderscoreid,
        itemUnderscoreid,
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
* Update document item
*
* documentUnderscoreid Integer 
* itemUnderscoreid Integer 
* documentItemUpdate DocumentItemUpdate 
* returns DocumentItem
* */
const documentsDocument_idItemsItem_idPUT = ({ documentUnderscoreid, itemUnderscoreid, documentItemUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentUnderscoreid,
        itemUnderscoreid,
        documentItemUpdate,
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
* Add item to document
*
* documentUnderscoreid Integer 
* documentItemCreate DocumentItemCreate 
* returns DocumentItem
* */
const documentsDocument_idItemsPOST = ({ documentUnderscoreid, documentItemCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentUnderscoreid,
        documentItemCreate,
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
* Update document
*
* documentUnderscoreid Integer 
* documentUpdate DocumentUpdate 
* returns Document
* */
const documentsDocument_idPUT = ({ documentUnderscoreid, documentUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentUnderscoreid,
        documentUpdate,
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
* Get all documents
*
* returns List
* */
const documentsGET = () => new Promise(
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
* Create a new document
*
* documentCreate DocumentCreate 
* returns Document
* */
const documentsPOST = ({ documentCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        documentCreate,
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
