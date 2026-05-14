// ==========================================
// Data Management System
// This program uses objects,
// Set and Map in JavaScript.
// ==========================================

// Product object
const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 2500,
  },
  {
    id: 2,
    name: 'Keyboard',
    price: 300,
  },
  {
    id: 3,
    name: 'Printer',
    price: 800,
  },
];

// Validate product data
products.forEach((product) => {
  if (product.id > 0 && product.name !== '' && product.price > 0) {
    console.log(`${product.name}: Product data is valid`);
  } else {
    console.error(`${product.name}: Error:Invalid product data`);
  }
});

// Show object data
console.log('----- Product Data -----');

products.forEach((product) => {
  for (const key in product) {
    console.log(`${key}: ${product[key]}`);
  }

  console.log('-------------------');
});

// Create a Set with duplicate values
const Numbers = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log('----- Set Data -----');

//Add a new number
Numbers.add(6);

//Check if number exists
console.log(Numbers.has(3));

// Delete a number
Numbers.delete(2);

// Show set values
for (const number of Numbers) {
  console.log(number);
}

// Create a Map
const productCategory = new Map();

productCategory.set('Electronics', 'Laptop');
productCategory.set('Accessories', 'Keyboard');
productCategory.set('Office Equipment', 'Printer');

console.log('----- Map Data -----');

// Show Map values
productCategory.forEach((value, key) => {
  console.log(`Category: ${key} | Product: ${value}`);
});

// Object methods
console.log('----- Object Methods -----');

products.forEach((product) => {
  console.log(Object.keys(product));

  console.log(Object.values(product));

  console.log(JSON.stringify(Object.entries(product)));
});
