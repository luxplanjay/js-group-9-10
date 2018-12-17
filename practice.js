'use strict';

const storage = {
  products: [
    { name: 'apples', price: 50, amount: 1000 },
    { name: 'grapes', price: 40, amount: 500 },
    { name: 'bread', price: 30, amount: 200 },
    { name: 'milk', price: 40, amount: 100 },
    { name: 'cheese', price: 70, amount: 50 },
  ],
  getProductByName(name) {
    for (const product of storage.products) {
      if (product.name === name) {
        return product;
      }
    }
  },
  addProduct(product) {
    storage.products.push(product);
  },
  changeProductPrice(productName, newPrice) {
    const product = storage.getProductByName(productName);

    if (!product) return;

    product.price = newPrice;

    // for (const product of storage.products) {
    //   if (product.name === productName) {
    //     product.price = newPrice;
    //   }
    // }
  },
  getProductsWithAmount(amount) {
    const result = [];

    for (const product of storage.products) {
      if (product.amount >= amount) {
        result.push(product);
      }
    }

    return result;
  },
};

console.log(storage);

const product = storage.getProductByName('milk');
console.log(product);

storage.addProduct({ name: 'rabbit', price: 100, amount: 50 });
console.log(storage);

storage.changeProductPrice('milk', 300);
console.log(storage);

storage.changeProductPrice('apples', 500);
console.log(storage);

storage.changeProductPrice('qweqwe', 500);
console.log(storage);

const result = storage.getProductsWithAmount(200);

console.log(result);
