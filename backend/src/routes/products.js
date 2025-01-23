import express from 'express';
import { getAllProducts, createProduct } from '../controllers/productController.js';

const router = express.Router();

// GET /api/products - Get all products
router.get('/', getAllProducts);

// POST /api/products - Create a new product
router.post('/', createProduct);

export default router;
