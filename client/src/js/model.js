import * as api from './services/api';

const model = {
  items: [],
  get() {
    return api.getPosts().then(posts => {
      this.items = posts;

      return this.items;
    });
  },
  add(item) {
    return api.savePost(item).then(savedItem => {
      this.items.push(savedItem);

      return savedItem;
    });
  },
  delete(id) {
    return api.deletePost(id).then(() => {
      this.items = this.items.filter(item => item.id !== id);

      return id;
    });
  },
  update(id, item) {
    return api.updatePost(id, item).then(updatedItem => {
      this.items = this.items.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      );

      return updatedItem;
    });
  }
};

export default model;
