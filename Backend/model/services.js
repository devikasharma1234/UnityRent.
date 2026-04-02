const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: [true, 'Please provide a service name'],
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Coding', 'Academic', 'Creative Arts', 'Project Making', 'Media', 'Design', 'Career'],
    default: 'Academic'
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  image: {
    type: String,
    default: 'https://5.imimg.com/data5/SELLER/Default/2023/6/313875172/HY/ZM/HY/190859855/assignment-writing-services-500x500.png' 
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price cannot be negative']
  },
  priceUnit: {
    type: String,
    required: true,
    default: 'per hour' // e.g., 'per script', 'per hand', 'per assignment'
  },
  providerName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  tags: {
    type: [String],
    validate: [val => val.length <= 10, 'Cannot exceed 10 tags']
  }
}, {
  //  automatically handles 'createdAt' and 'updatedAt' 
  timestamps: true 
});

// Create an index for searching by service name or category
serviceSchema.index({ serviceName: 'text', category: 'text' });

module.exports = mongoose.model('Service', serviceSchema);
