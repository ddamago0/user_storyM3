// ==========================================
// Data Management System
// This program uses objects,
// Set and Map in JavaScript.
// ==========================================

// Product object
const product = {
  id: 1,
  name: 'Laptop',
  price: 2500,
};

// Validate product data
if (product.id > 0 && product.name !== '' && product.price > 0) {
  console.log('Product data is valid');
} else {
  console.error('Error: Invalid product data');
}
