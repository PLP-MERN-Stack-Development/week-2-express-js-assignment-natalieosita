const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (
    !name || typeof name !== 'string' ||
    !description || typeof description !== 'string' ||
    typeof price !== 'number' ||
    !category || typeof category !== 'string' ||
    typeof inStock !== 'boolean'
  ) {
    return res.status(400).json({ message: 'Invalid product data provided' });
  }

  next();
};

module.exports = validateProduct;