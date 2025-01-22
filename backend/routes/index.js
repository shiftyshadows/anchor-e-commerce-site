const express = require('express');
const router = express.Router();

const productRoutes = require('./products');
const userRoutes = require('./users');
const orderRoutes = require('./orders');

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
