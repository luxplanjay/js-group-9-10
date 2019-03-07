const todos = {
  items: ['item-1', 'item-2'],
  add(item) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.items.push(item);

        resolve(item);
      }, 300);
    });
  },
  delete(item) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.items = this.items.filter(i => item !== i);

        resolve(this.items);
      }, 500);
    });
  }
};

export default todos;
