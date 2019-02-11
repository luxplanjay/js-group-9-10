// const shortid = require('shortid');
// const uuidv4 = require('uuid/v4');

// const uuidId = uuidv4();
// const shortidId = shortid.generate();

// console.log('uuidId: ', uuidId);
// console.log('shortidId: ', shortidId);

const add = (a, b) => a + b;

add(3, 5);

class User {
  static types = {
    hello: 'Hello type'
  };

  constructor(name = '') {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const user = new User('Mango');

console.log(user.name);
