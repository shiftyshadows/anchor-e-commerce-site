import mongoose from 'mongoose';
import ShortUniqueId from 'short-uuid';

const shortUuid = new ShortUniqueId();

const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => shortUuid(), // Automatically generate short UUID
  },
  name: { type: String, required: true }, // Product name
  price: { type: Number, required: true }, // Product price
  description: { type: String }, // Product description
  featured: { type: Boolean, default: false }, // Featured attribute
  image: { type: String, required: true }, // Product image URL or path
  stock: { type: Number, required: true, min: 0 }, // Stock levels (minimum value 0)
  createdAt: { type: Date, default: Date.now }, // Timestamp
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);

// Add a virtual to store numeric price without currency
productSchema.virtual('numericPrice').get(function () {
  const numericValue = this.price.replace(/[^0-9.]/g, ''); // Extract numeric value
  return parseFloat(numericValue) || 0;
});

export default Product;
