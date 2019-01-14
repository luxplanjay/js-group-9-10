'use strict';

const User = function User({ name = 'user', email = '', phone = '' }) {
  // 1. Создается пустой обьект
  // 2. this получает ссылку на созданный обьект

  this.name = name;
  this.email = email;
  this.phone = phone;

  // 3. в Свойство __proto__ обьекта записывается ссылка на обьект User.prototype
  // тоесть User.prototype это ПРОТОТИП будущего обьекта
  // this.__proto__ = User.prototype;

  // 4. ссылка на обьект возвращается
  // return this
};

// {constructor: User}
User.prototype.changeName = function(newName) {
  this.name = newName;
};

User.prototype.showEmail = function() {
  console.log(this.email);
};

console.dir(User);

User.showUserInfo = function(userObj) {
  console.log('Name: ', userObj.name);
  console.log('Email: ', userObj.email);
};

const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
  phone: '99-99-99',
});

const poly = new User({
  name: 'Poly',
  email: 'poly@mail.com',
  phone: '99-99-99',
});

mango.showEmail();
poly.showEmail();
