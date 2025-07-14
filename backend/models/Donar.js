const mongoose = require('mongoose');

const DonarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  PAN: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    match: /^\S+@\S+\.\S+$/,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 1,
  },
  amount_in_words: {
    type: String,
    required: true,
    trim: true,
  },
  payment_mode: {
    type: String,
    required: true,
  },
  transaction_no: {
    type: Number,
    required: false,
    trim: true,
  },
  date: {
    type: Date
  }
}, {
  timestamps: true // adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Donar', DonarSchema);
