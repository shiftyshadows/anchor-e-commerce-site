import mongoose from 'mongoose';
import ShortUUID from 'short-uuid';

const productSchema = new mongoose.Schema({
  id: {
      type: String,
      default: () => new Date().toISOString(), // This will create a timestamp in ISO format
      unique: true
  },
  createdBy: {
      type: String,
      default: 'shiftyshadows' // Current user's login
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  featured: { type: Boolean, default: false },
  image: { type: String, required: true },
  stock: { type: Number, required: true, min: 0 },
  createdAt: {
      type: Date,
      default: Date.now,
      get: function(date) {
          return date.toISOString().slice(0, 19).replace('T', ' '); // Formats to YYYY-MM-DD HH:MM:SS
      }
  }
}, {
    timestamps: true, // This will add createdAt and updatedAt fields automatically
    toJSON: { getters: true }, // This ensures the getter for createdAt is used when converting to JSON
});

// Add a virtual to store numeric price without currency
productSchema.virtual('numericPrice').get(function () {
  const numericValue = this.price.replace(/[^0-9.]/g, ''); // Extract numeric value
  return parseFloat(numericValue) || 0;
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);

export default Product;
