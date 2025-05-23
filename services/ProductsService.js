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
      resolve(Service.successResponse({
        categoryUnderscoreid,
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
* Get product category by ID
*
* categoryUnderscoreid Integer 
* returns ProductCategory
* */
const product_categoriesCategory_idGET = ({ categoryUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        categoryUnderscoreid,
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
* Update product category
*
* categoryUnderscoreid Integer 
* productCategoryUpdate ProductCategoryUpdate 
* returns ProductCategory
* */
const product_categoriesCategory_idPUT = ({ categoryUnderscoreid, productCategoryUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        categoryUnderscoreid,
        productCategoryUpdate,
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
* Get all product categories
*
* returns List
* */
const product_categoriesGET = () => new Promise(
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
* Create a new product category
*
* productCategoryCreate ProductCategoryCreate 
* returns ProductCategory
* */
const product_categoriesPOST = ({ productCategoryCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        productCategoryCreate,
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
* Get all products
*
* returns List
* */
const productsGET = () => new Promise(
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
* Create a new product
*
* productCreate ProductCreate 
* returns Product
* */
const productsPOST = ({ productCreate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        productCreate,
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
* Delete product
*
* productUnderscoreid Integer 
* no response value expected for this operation
* */
const productsProduct_idDELETE = ({ productUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        productUnderscoreid,
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
* Get product by ID
*
* productUnderscoreid Integer 
* returns Product
* */
const productsProduct_idGET = ({ productUnderscoreid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        productUnderscoreid,
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
* Update product
*
* productUnderscoreid Integer 
* productUpdate ProductUpdate 
* returns Product
* */
const productsProduct_idPUT = ({ productUnderscoreid, productUpdate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        productUnderscoreid,
        productUpdate,
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
