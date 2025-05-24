/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete product category
*
* categoryUnderscoreid Integer 
* no response value expected for this operation
* */
const product_categoriesCategory_idDELETE = ({ categoryUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
     const { rows } = await pool.query(
        `DELETE FROM "product_categorie" 
        WHERE category_id = $1 
        RETURNING *`,
        [categoryUnderscoreid]
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
* Get product category by ID
*
* categoryUnderscoreid Integer 
* returns ProductCategory
* */
const product_categoriesCategory_idGET = ({ categoryUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM "product_categorie" 
        WHERE category_id = $1`,
        [categoryUnderscoreid]
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
* Update product category
*
* categoryUnderscoreid Integer 
* productCategoryUpdate ProductCategoryUpdate 
* returns ProductCategory
* */
const product_categoriesCategory_idPUT = ({ categoryUnderscoreid, productCategoryUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
       const { category_id } = categoryUnderscoreid;
      const { name, description } = productCategoryUpdate.body;
      
      const { rows } = await pool.query(
        `UPDATE "product_categorie" 
        SET 
          name = $1,
          description = $2
        WHERE category_id = $3
        RETURNING *`,
        [name, description, category_id]
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
* Get all product categories
*
* returns List
* */
const product_categoriesGET = () => new Promise(
  async (resolve, reject) => {
    try {
      const { rows } = await pool.query(`SELECT * FROM "product_categorie"`);
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
* Create a new product category
*
* productCategoryCreate ProductCategoryCreate 
* returns ProductCategory
* */
const product_categoriesPOST = ({ productCategoryCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      const { name, description } = productCategoryCreate.body;
      const { rows } = await pool.query(
        `INSERT INTO "product_categorie" (name, description, created_at)
        VALUES ($1, $2, NOW())
        RETURNING *`,
        [name, description]
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
* Get all products
*
* returns List
* */
const productsGET = () => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT 
          p.*, 
          pc.name AS category_name 
        FROM "product" p
        LEFT JOIN "product_categorie" pc 
          ON p.category_id = pc.category_id`
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
* Create a new product
*
* productCreate ProductCreate 
* returns Product
* */
const productsPOST = ({ productCreate }) => new Promise(
  async (resolve, reject) => {
    try {
       const {
        sku,
        name,
        description,
        unit,
        barcode,
        min_stock_level,
        max_stock_level,
        delivery_time,
        purchase_price,
        selling_price,
        is_active,
        category_id
      } = productCreate.body;

      const { rows } = await pool.query(
        `INSERT INTO "product" (
          sku, name, description, unit, barcode, 
          min_stock_level, max_stock_level, delivery_time, 
          purchase_price, selling_price, is_active, 
          created_at, updated_at, category_id
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), NOW(), $12)
        RETURNING *`,
        [sku, name, description, unit, barcode, min_stock_level, 
         max_stock_level, delivery_time, purchase_price, 
         selling_price, is_active, category_id]
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
* Delete product
*
* productUnderscoreid Integer 
* no response value expected for this operation
* */
const productsProduct_idDELETE = ({ productUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `DELETE FROM "product" 
        WHERE product_id = $1 
        RETURNING *`,
        [productUnderscoreid]
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
* Get product by ID
*
* productUnderscoreid Integer 
* returns Product
* */
const productsProduct_idGET = ({ productUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
       const { rows } = await pool.query(
        `SELECT 
          p.*, 
          pc.name AS category_name 
        FROM "product" p
        LEFT JOIN "product_categorie" pc 
          ON p.category_id = pc.category_id
        WHERE p.product_id = $1`,
        [productUnderscoreid]
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
* Update product
*
* productUnderscoreid Integer 
* productUpdate ProductUpdate 
* returns Product
* */
const productsProduct_idPUT = ({ productUnderscoreid, productUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      const { product_id } = productUnderscoreid;
      const {
        sku,
        name,
        description,
        unit,
        barcode,
        min_stock_level,
        max_stock_level,
        delivery_time,
        purchase_price,
        selling_price,
        is_active,
        category_id
      } = productUpdate.body;

      const { rows } = await pool.query(
        `UPDATE "product" 
        SET 
          sku = $1,
          name = $2,
          description = $3,
          unit = $4,
          barcode = $5,
          min_stock_level = $6,
          max_stock_level = $7,
          delivery_time = $8,
          purchase_price = $9,
          selling_price = $10,
          is_active = $11,
          updated_at = NOW(),
          category_id = $12
        WHERE product_id = $13
        RETURNING *`,
        [sku, name, description, unit, barcode, min_stock_level, 
         max_stock_level, delivery_time, purchase_price, 
         selling_price, is_active, category_id, product_id]
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

module.exports = {
  product_categoriesCategory_idDELETE,
  product_categoriesCategory_idGET,
  product_categoriesCategory_idPUT,
  product_categoriesGET,
  product_categoriesPOST,
  productsGET,
  productsPOST,
  productsProduct_idDELETE,
  productsProduct_idGET,
  productsProduct_idPUT,
};
