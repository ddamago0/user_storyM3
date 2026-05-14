// ============================
// Data Management System
// This program uses objects,
// Set and Map in JavaScript.
//=============================

const { log } = require('console');

// Product object
const Product = {
  id: 1,
  name: 'Laptop',
  price: 2500,
};

// Validate product data
if (Product.id > 0 && Product.name !== '' && Product.price > 0) {
  console.log('Product data is valid.');
} else {
  console.error('Error: Invalid product data');
}
