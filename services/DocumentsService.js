/* eslint-disable no-unused-vars */
const Service = require('./Service');
const pool = require('../db');
/**
* Delete document status
*
* documentUnderscorestatusUnderscoreid Integer 
* no response value expected for this operation
* */
const document_statusesDocument_status_idDELETE = ( document_status_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `DELETE FROM "document_status" 
        WHERE document_status_id = $1 
        RETURNING *`,
        [document_status_id]
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
const document_statusesDocument_status_idGET = ( document_status_id ) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT * FROM "document_status" 
        WHERE document_status_id = $1`,
        [document_status_id]
      );

if (rows.length === 0) {
        return reject(Service.rejectResponse('Document status not found', 404));
      }

      resolve(rows[0]);
    } catch (e) {
      reject(Service.rejectResponse(
       e.message || 'Database error',
        e.status || 500,
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
const document_statusesDocument_status_idPUT = ( document_status_id, updateData ) => new Promise(
  async (resolve, reject) => {
    try {
      if (typeof document_status_id !== 'number' || isNaN(document_status_id)) {
        return reject(Service.rejectResponse('Invalid document status ID', 400));
      }

      const { status_name } = updateData;

      const { rows } = await pool.query(
        `UPDATE "document_status" 
        SET status_name = $1 
        WHERE document_status_id = $2 
        RETURNING *`,
        [status_name, document_status_id]
      );

       if (rows.length === 0) {
        return reject(Service.rejectResponse('Document status not found', 404));
      }
      resolve(Service.successResponse(rows[0]));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Database error',
        e.status || 500,
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
const document_statusesPOST = ( documentStatusCreate ) => new Promise(
  async (resolve, reject) => {
    try {
       const { document_status_id, status_name } = documentStatusCreate.body;
      const { rows } = await pool.query(
        `INSERT INTO "document_status" (status_name)
        VALUES ($1) 
        RETURNING *`,
        [status_name]
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
const document_typesPOST = ( documentTypeCreate ) => new Promise(
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
const document_typesType_idDELETE = ( type_id ) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `DELETE FROM "document_types" 
        WHERE type_id = $1 
        RETURNING *`,
        [type_id]
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
const document_typesType_idGET = ( type_id ) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT * FROM "document_types" 
        WHERE type_id = $1`,
        [type_id]
      );

if (rows.length === 0) {
        return reject(Service.rejectResponse('Type id not found', 404));
      }

      resolve(rows[0]);
    } catch (e) {
      reject(Service.rejectResponse(
 e.message || 'Database error',
        e.status || 500,
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
const document_typesType_idPUT = ( type_id, updateData ) => new Promise(
  async (resolve, reject) => {
    try {
if (typeof type_id !== 'number' || isNaN(type_id)) {
        return reject(Service.rejectResponse('Invalid type ID', 400));
      }
      const { name, prefix, requires_approval, direction } = updateData;

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

      if (rows.length === 0) {
        return reject(Service.rejectResponse('Type not found', 404));
      }
      resolve(Service.successResponse(rows[0]));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Database error',
        e.status || 500,
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
const documentsDocument_idDELETE = ( document_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `DELETE FROM "document" 
        WHERE document_id = $1 
        RETURNING *`,
        [document_id]
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
const documentsDocument_idGET = ( document_id ) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM "document" 
        WHERE document_id = $1`,
        [document_id]
      );

      if (rows.length === 0) {
        return reject(Service.rejectResponse('Document not found', 404));
      }
      resolve(rows[0]);
    } catch (e) {
      reject(Service.rejectResponse(
       e.message || 'Database error',
        e.status || 500,
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
const documentsDocument_idItemsGET = (document_id) => new Promise(
  async (resolve, reject) => {
    try {
      // Проверяем существование документа
      const docCheck = await pool.query(
        `SELECT 1 FROM document WHERE document_id = $1`,
        [document_id]
      );
      
      if (docCheck.rowCount === 0) {
        return reject(Service.rejectResponse('Document not found', 404));
      }

      // Получаем элементы документа через связь с document_item
      const { rows } = await pool.query(
        `SELECT di.* FROM document_item di
         JOIN document d ON di.item_id = d.item_id
         WHERE d.document_id = $1`,
        [document_id]
      );
      
      if (rows.length === 0) {
        return reject(Service.rejectResponse('No items found for this document', 404));
      }
      
      resolve(Service.successResponse(rows));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Database error',
        e.status || 500,
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
const documentsDocument_idItemsItem_idDELETE = (document_id, item_id) => new Promise(
  async (resolve, reject) => {
    try {
      // Проверяем существование связи между документом и элементом
      const check = await pool.query(
        `SELECT 1 FROM document 
         WHERE document_id = $1 AND item_id = $2`,
        [document_id, item_id]
      );
      
      if (check.rowCount === 0) {
        return reject(Service.rejectResponse('Document item not found', 404));
      }

      // Удаляем элемент из document_item
      const { rowCount } = await pool.query(
        `DELETE FROM document_item 
         WHERE item_id = $1`,
        [item_id]
      );
      
      if (rowCount === 0) {
        return reject(Service.rejectResponse('Item not found', 404));
      }
      
      // Обновляем документ, удаляя ссылку на элемент
      await pool.query(
        `UPDATE document SET item_id = NULL 
         WHERE document_id = $1 AND item_id = $2`,
        [document_id, item_id]
      );
      
      resolve(Service.successResponse({ message: 'Item deleted' }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Database error',
        e.status || 500,
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
const documentsDocument_idItemsItem_idGET = (document_id, item_id) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM document_item 
         WHERE item_id = $1 AND document_id = $2`,
        [item_id, document_id]
      );
      
      if (rows.length === 0) {
        return reject(Service.rejectResponse('Document item not found', 404));
      }
      
      resolve(rows[0]);
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Database error',
        e.status || 500,
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
const documentsDocument_idItemsItem_idPUT = (document_id, item_id, updateData) => new Promise(
  async (resolve, reject) => {
    try {
      // Проверяем существование связи между документом и элементом
      const check = await pool.query(
        `SELECT 1 FROM document 
         WHERE document_id = $1 AND item_id = $2`,
        [document_id, item_id]
      );
      
      if (check.rowCount === 0) {
        return reject(Service.rejectResponse('Document item not found', 404));
      }

      const { quantity, price, amount, tax_rate, discount } = updateData;
      
      const { rows } = await pool.query(
        `UPDATE document_item SET
          quantity = $1,
          price = $2,
          amount = $3,
          tax_rate = $4,
          discount = $5
         WHERE item_id = $6
         RETURNING *`,
        [quantity, price, amount, tax_rate, discount, item_id]
      );
      
      if (rows.length === 0) {
        return reject(Service.rejectResponse('Item not found', 404));
      }
      
      resolve(Service.successResponse(rows[0]));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Database error',
        e.status || 500,
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
const documentsDocument_idItemsPOST = (document_id, documentItemCreate) => new Promise(
  async (resolve, reject) => {
    try {
      // Проверка существования документа
      const docCheck = await pool.query(
        `SELECT 1 FROM document WHERE document_id = $1`,
        [document_id]
      );
      
      if (docCheck.rowCount === 0) {
        return reject(Service.rejectResponse('Document not found', 404));
      }
      
      // Извлечение данных элемента
      const { quantity, price, amount, tax_rate, discount } = documentItemCreate;
      
      // Начинаем транзакцию
      await pool.query('BEGIN');
      
      try {
        // Вставка элемента в document_item
        const { rows } = await pool.query(
          `INSERT INTO document_item 
           (quantity, price, amount, tax_rate, discount) 
           VALUES ($1, $2, $3, $4, $5)
           RETURNING *`,
          [quantity, price, amount, tax_rate, discount]
        );
        
        // Связываем элемент с документом
        await pool.query(
          `UPDATE document SET item_id = $1
           WHERE document_id = $2`,
          [rows[0].item_id, document_id]
        );
        
        // Фиксируем транзакцию
        await pool.query('COMMIT');
        
        resolve(Service.successResponse(rows[0], 201));
      } catch (e) {
        // Откатываем транзакцию при ошибке
        await pool.query('ROLLBACK');
        throw e;
      }
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Database error',
        e.status || 500,
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
const documentsDocument_idPUT = ( document_id, updateData ) => new Promise(
  async (resolve, reject) => {
    try {
if (typeof document_id !== 'number' || isNaN(document_id)) {
        return reject(Service.rejectResponse('Invalid document ID', 400));
      }
      const {
        document_number,
        status,
        comments,
        customer_id,
        type_id,
        document_status_id
      } = updateData;

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

       if (rows.length === 0) {
        return reject(Service.rejectResponse('Document not found', 404));
      }
      resolve(Service.successResponse(rows[0]));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Database error',
        e.status || 500,
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
const documentsPOST = ( documentCreate ) => new Promise(
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
