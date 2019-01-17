'use strict';

class User {
  constructor({ name = 'user', email = '', phone = '' }) {
    this._name = name;
    this._email = email;
    this._phone = phone;
  }

  static showUserInfo(userObj) {
    console.log(this);
    console.log('Name: ', userObj._name);
    console.log('Email: ', userObj._email);
  }

  showPhone() {
    console.log(this._phone);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
  phone: '99-99-99',
});

console.log(mango);
console.log(mango.name);
mango.name = 'Poly';
console.log(mango.name);
