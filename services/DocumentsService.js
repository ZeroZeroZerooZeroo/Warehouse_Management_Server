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
      const { rows } = await pool.query(
        `DELETE FROM "document_status" 
        WHERE document_status_id = $1 
        RETURNING *`,
        [documentUnderscorestatusUnderscoreid]
      );
      resolve(Service.successResponse(rows[0]));
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
       const { rows } = await pool.query(
        `SELECT * FROM "document_status" 
        WHERE document_status_id = $1`,
        [documentUnderscorestatusUnderscoreid]
      );
      resolve(Service.successResponse(rows[0]));
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
     const { document_status_id } = documentUnderscorestatusUnderscoreid;
      const { new_status_name } = documentStatusUpdate.body;

      const { rows } = await pool.query(
        `UPDATE "document_status" 
        SET status_name = $1 
        WHERE document_status_id = $2 
        RETURNING *`,
        [new_status_name, document_status_id]
      );
      resolve(Service.successResponse(rows[0]));
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
     const { rows } = await pool.query(`SELECT * FROM "document_status"`);
      resolve(Service.successResponse(rows));
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
       const { document_status_id, status_name } = documentStatusCreate.body;
      const { rows } = await pool.query(
        `INSERT INTO "document_status" (document_status_id, status_name)
        VALUES ($1, $2) 
        RETURNING *`,
        [document_status_id, status_name]
      );
      resolve(Service.successResponse(rows[0], 201));
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
      const { rows } = await pool.query(`SELECT * FROM "document_types"`);
      resolve(Service.successResponse(rows));
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
      const { name, prefix, requires_approval, direction } = documentTypeCreate.body;
      const { rows } = await pool.query(
        `INSERT INTO "document_types" (name, prefix, requires_approval, direction)
        VALUES ($1, $2, $3, $4) 
        RETURNING *`,
        [name, prefix, requires_approval, direction]
      );
      resolve(Service.successResponse(rows[0], 201));
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
       const { rows } = await pool.query(
        `DELETE FROM "document_types" 
        WHERE type_id = $1 
        RETURNING *`,
        [typeUnderscoreid]
      );
      resolve(Service.successResponse(rows[0]));
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
       const { rows } = await pool.query(
        `SELECT * FROM "document_types" 
        WHERE type_id = $1`,
        [typeUnderscoreid]
      );
      resolve(Service.successResponse(rows[0]));
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
       const { type_id } = typeUnderscoreid;
      const { name, prefix, requires_approval, direction } = documentTypeUpdate.body;

      const { rows } = await pool.query(
        `UPDATE "document_types" 
        SET 
          name = $1,
          prefix = $2,
          requires_approval = $3,
          direction = $4
        WHERE type_id = $5
        RETURNING *`,
        [name, prefix, requires_approval, direction, type_id]
      );
      resolve(Service.successResponse(rows[0]));
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
      const { rows } = await pool.query(
        `DELETE FROM "document" 
        WHERE document_id = $1 
        RETURNING *`,
        [documentUnderscoreid]
      );
      resolve(Service.successResponse(rows[0]));
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
      const { rows } = await pool.query(
        `SELECT * FROM "document" 
        WHERE document_id = $1`,
        [documentUnderscoreid]
      );
      resolve(Service.successResponse(rows[0]));
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
      const { rows } = await pool.query(
        `SELECT * FROM "document_item" 
        WHERE item_id IN (
          SELECT item_id FROM "document" 
          WHERE document_id = $1
        )`,
        [documentUnderscoreid]
      );
      resolve(Service.successResponse(rows));
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
      const { rows } = await pool.query(
       `DELETE FROM "document_item" 
        WHERE item_id = $1 
        AND document_id = $2 
        RETURNING *`,
        [itemUnderscoreid, documentUnderscoreid]
      );
      resolve(Service.successResponse(rows[0]));
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
        const { rows } = await pool.query(
        `SELECT * FROM "document_item" 
        WHERE item_id = $1
        AND document_id = $2 `,
         [itemUnderscoreid, documentUnderscoreid]
      );
      resolve(Service.successResponse(rows[0]));
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
      const { item_id } = itemUnderscoreid;
      const {document_id} = documentUnderscoreid;
      const {
        quantity,
        price,
        amount,
        tax_rate,
        discount
      } = documentItemUpdate.body;

      const { rows } = await pool.query(
        `UPDATE "document_item" 
        SET 
          quantity = $1,
          price = $2,
          amount = $3,
          tax_rate = $4,
          discount = $5
        WHERE item_id = $6
        AND document_id = $7
        RETURNING *`,
        [quantity, price, amount, tax_rate, discount, item_id, document_id]
      );

      resolve(Service.successResponse(rows[0]));
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
      const { document_id } = documentUnderscoreid;
      const {
        quantity,
        price,
        amount,
        tax_rate,
        discount
      } = documentItemCreate.body;

      const { rows } = await pool.query(
        `WITH doc_item AS (
          INSERT INTO "document_item" (
            quantity, price, amount, tax_rate, discount
          ) VALUES ($1, $2, $3, $4, $5)
          RETURNING item_id
        )
        UPDATE "document" 
        SET item_id = (SELECT item_id FROM doc_item) 
        WHERE document_id = $6 
        RETURNING *`,
        [quantity, price, amount, tax_rate, discount, document_id]
      );
      resolve(Service.successResponse(rows[0], 201));
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
      const { document_id } = documentUnderscoreid;
      const {
        document_number,
        status,
        comments,
        customer_id,
        type_id,
        document_status_id
      } = documentUpdate.body;

      const { rows } = await pool.query(
        `UPDATE "document" 
        SET 
          document_number = $1,
          status = $2,
          comments = $3,
          customer_id = $4,
          type_id = $5,
          document_status_id = $6
        WHERE document_id = $7
        RETURNING *`,
        [document_number, status, comments, customer_id, type_id, document_status_id, document_id]
      );
      resolve(Service.successResponse(rows[0]));
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
      const { rows } = await pool.query(
        `SELECT 
          d.*,
          dt.name AS document_type,
          ds.status_name AS document_status
        FROM "document" d
        JOIN "document_types" dt ON d.type_id = dt.type_id
        JOIN "document_status" ds ON d.document_status_id = ds.document_status_id`
      );
      resolve(Service.successResponse(rows));
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
       const {
        document_number,
        status,
        comments,
        customer_id,
        type_id,
        document_status_id
      } = documentCreate.body;

      const { rows } = await pool.query(
        `INSERT INTO "document" (
          document_number, created_date, status, 
          comments, customer_id, type_id, 
          document_status_id
        ) VALUES ($1, NOW(), $2, $3, $4, $5, $6)
        RETURNING *`,
        [document_number, status, comments, customer_id, type_id, document_status_id]
      );
      resolve(Service.successResponse(rows[0], 201));
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
