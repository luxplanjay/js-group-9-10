'use strict';

const User = function User({ name = 'user', email = '', phone = '' }) {
  // const { name, email, phone } = config;

  // Когда вызвали через new в this
  // записывается ссылка на тот пустой обьект
  // this = {}

  this.name = name;
  this.email = email;
  this.phone = phone;

  this.changeName = function(newName) {
    this.name = newName;
  };

  // Делает за нас автоматически
  // return this;
};

// Статическое свойство, доступно только на самом конструкторе
// User.myProp = 'static prop!';
// console.log(User.myProp);

// Статический метод, доступен только на самом конструкторе
User.showUserInfo = function(userObj) {
  console.log('Name: ', userObj.name);
  console.log('Email: ', userObj.email);
};

// Паттерн обьект настроек (configuration object)
// То что получается называется экземпляр
const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
  phone: '99-99-99',
});

User.showUserInfo(mango);

// console.log(mango);
// mango.changeName('Poly');
// console.log(mango);

// Внутренние методы функции, почему работает new
// const foo = function() {};

// foo(); // [[Call]]
// const obj = new foo(); // [[Construct]]

// console.log(obj);
