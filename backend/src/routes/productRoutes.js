import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

/**
 * @route   POST /api/products
 * @desc    Create a new product
 */
router.post('/', async (req, res) => {
  const { name, price, description, featured, image, stock } = req.body;

  try {
    // Format price with currency
    const formattedPrice = `Ksh ${price}`;
    const product = new Product({ name, price: formattedPrice, description, featured, image, stock });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product', error: error.message });
  }
});

/**
 * @route   GET /api/products
 * @desc    Fetch all products
 */
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error: error.message });
  }
});

/**
 * @route   GET /api/products/featured
 * @desc    Fetch featured products with stock > 0
 */
router.get('/featured', async (req, res) => {
  try {
    const featuredProducts = await Product.find({ featured: true, stock: { $gt: 0 } });
    res.status(200).json(featuredProducts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch featured products', error: error.message });
  }
});

/**
 * @route   PATCH /api/products/:id/stock
 * @desc    Update stock level of a product
 */
router.patch('/:id/stock', async (req, res) => {
  const { id } = req.params;
  const { stock } = req.body;

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.stock = stock;
    if (stock === 0) product.featured = false; // Automatically unset featured if stock is 0

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update stock', error: error.message });
  }
});

/**
 * @route   PATCH /api/products/:id/price
 * @desc    Update the price of a product
 */
router.patch('/:id/price', async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.price = `Ksh ${price}`; // Format price with currency
    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update price', error: error.message });
  }
});

/**
 * @route   GET /api/products/:id
 * @desc    Fetch details of a single product
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch product', error: error.message });
  }
});

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete a product by its ID
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product', error: error.message });
  }
});

export default router;
