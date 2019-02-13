export default class Model {
  static generateUniqueId = () =>
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  constructor(items = []) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  save(text) {
    const newItem = {
      id: Model.generateUniqueId(),
      body: text,
    };

    this._items.push(newItem);

    return newItem;
  }

  delete(id) {
    this._items = this._items.filter(item => item.id !== id);
  }

  filter(query = '') {
    return this._items.filter(item =>
      item.body.toLowerCase().includes(query.toLowerCase()),
    );
  }
}
