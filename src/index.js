import './sass/main.scss';
import productTemplate from './templates/product.hbs';
import products from './assets/products.json';

const refs = {
  productList: document.querySelector('.product-list')
};

const createProductCard = product => {
  return productTemplate(product);
};

const createProductListItemsMarkup = products => {
  return products.map(product => createProductCard(product)).join('');
};

const markup = createProductListItemsMarkup(products);

refs.productList.insertAdjacentHTML('beforeend', markup);
