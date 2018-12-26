'use strict';

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1,
};

const countTotalPrice = (allProducts, order) => {
  const orderKeys = Object.keys(order);

  console.log(orderKeys);

  let total = 0;

  for (const key of orderKeys) {
    console.log(key);

    const price = allProducts[key];
    const amount = order[key];

    console.log('allProducts[key]: ', allProducts[key]);
    console.log('order[key]: ', order[key]);

    total += price * amount;
  }

  console.log('total: ', total);
};

countTotalPrice(products, order);
