export default class Cart {
  constructor(items = {}) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  add(itemId) {
    this._items[itemId] = this._items[itemId] ? this._items[itemId] + 1 : 1;
  }

  remove(itemId) {
    const { [itemId]: _, ...rest } = this._items;

    this._items = rest;
  }

  total(products) {
    const itemIds = Object.keys(this._items);
    const productsInCart = products.filter(p => itemIds.includes(p.id));
    const productMap = productsInCart.reduce((map, product) => {
      map[product.id] = product.price;

      return map;
    }, {});

    console.log('itemsIds: ', itemIds);

    const total = itemIds.reduce(
      (acc, id) => (acc += this._items[id] * productMap[id]),
      0
    );

    return total;
  }
}
