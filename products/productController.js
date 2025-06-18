const ProductModel = require('./productModel');

// GET /api/products
const getAllProducts = (req, res) => {
  const { category } = req.query;
  let result = ProductModel.getAll();

  if (category) {
    result = result.filter(p => p.category === category);
  }

  const { startIndex = 0, endIndex = result.length } = req.pagination || {};
  res.json({
    total: result.length,
    data: result.slice(startIndex, endIndex)
  });
};

// GET /api/products/:id
const getProductById = (req, res) => {
  const product = ProductModel.getById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

// POST /api/products
const createProduct = (req, res) => {
  const product = ProductModel.create(req.body);
  res.status(201).json(product);
};

// PUT /api/products/:id
const updateProduct = (req, res) => {
  const updated = ProductModel.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Product not found' });
  res.json(updated);
};

// DELETE /api/products/:id
const deleteProduct = (req, res) => {
  const deleted = ProductModel.remove(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Product not found' });
  res.json(deleted);
};

// GET /api/products/search/name?query=laptop
const searchProducts = (req, res) => {
  const query = req.query.query?.toLowerCase();
  const results = ProductModel.getAll().filter(p =>
    p.name.toLowerCase().includes(query)
  );
  res.json(results);
};

// GET /api/products/stats/category
const getProductStats = (req, res) => {
  const stats = {};
  ProductModel.getAll().forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });
  res.json(stats);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductStats
};