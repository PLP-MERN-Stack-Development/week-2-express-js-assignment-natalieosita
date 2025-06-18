const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductStats
} = require('../controllers/productController');

const authenticate = require('../middleware/auth');
const validateProduct = require('../middleware/validateProduct');
const paginate = require('../middleware/paginate');

// List all products (with optional pagination & filtering)
router.get('/', paginate, getAllProducts);

// Get a product by ID
router.get('/:id', getProductById);

// Search products by name
router.get('/search/name', searchProducts);

// Product statistics (e.g., count by category)
router.get('/stats/category', getProductStats);

// Create a new product (protected + validated)
router.post('/', authenticate, validateProduct, createProduct);

// Update a product (protected + validated)
router.put('/:id', authenticate, validateProduct, updateProduct);

// Delete a product (protected)
router.delete('/:id', authenticate, deleteProduct);

module.exports = router;