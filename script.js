'use strict';

/* Собака

  const dog = {
  name: 'Mango',
  age: 3,
  };

  dog.mood = 'happy';
  dog['breed'] = 'овчарка';

  dog.age = 5;
  dog['name'] = 'Poly';

  const prop = 'name';

  console.log('dog["name"]: ', dog['name']);
  console.log('dog[prop]: ', dog[prop]);
  console.log('dog.name: ');

  console.log(dog);

  delete dog.name;

  console.log(dog);

  console.log(dog.name);
 */

/* User object

  const user = {
    name: 'Ajax',
    email: 'ajax@mail.com',
    age: 10,
  };

  const getPropByKey = function(obj, key) {
    return obj[key];
  };

  console.log(getPropByKey(user, 'qweqwe'));

  const getUserName = function(obj) {
    return obj.name;
  };

  console.log(getUserName(user));
 */

/* Computed properties
  const key = 'name';

  const user = {
    age: 5,
    [key]: 'mango',
  };

  // user[key] = 'mango';

  console.log(user);
 */

/* Methods

  const dog = {
    name: 'Mango',
    age: 3,
    mood: 'happy',
    makeSound(sound) {
      console.log(sound);
    },
    changeAge(newAge) {
      dog.age = newAge;
    },
    changeMood(newMood) {
      dog.mood = newMood;
    },
  };

  console.log(dog);
  dog.makeSound('WOOOOOOOF!');

  dog.changeAge(10);
  console.log(dog);

  dog.changeMood('grim');
  console.log(dog);
 */

/* Pattern enmumerable

  const MESSAGE_USER_CANCELED = 'Отменено пользователем!';
  const MESSAGE_INVALID_LOGIN = 'Доступ запрещен, неверный логин!';
  const MESSSAGE_INVALID_PASSWORD = 'Доступ запрещен, неверный пароль!';
  const MESSAGE_WELCOME = 'Добро пожаловать!';

  const MESSAGES = {
    USER_CANCELED: 'Отменено пользователем!',
    INVALID_LOGIN: 'Доступ запрещен, неверный логин!',
    INVALID_PASSWORD: 'Доступ запрещен, неверный пароль!',
    WELCOME: 'Добро пожаловать!',
  };
*/

/* for in

  const dog = {
    name: 'Mango',
    age: 3,
    mood: 'happy',
  };

  for (const key in dog) {
    console.log(key, dog[key]);
  }

  const order = {
    salad: 100,
    bread: 30,
    milk: 40,
  };

  const calculatePrice = function(order) {
    console.group('@calculating');
    let total = 0;

    for (const key in order) {
      console.log(key);

      total += order[key];
    }
    console.groupEnd('@calculating');

    return total;
  };

  console.log(calculatePrice(order));
  console.log(calculatePrice({ bread: 30, apples: 50 }));
*/

/* Object keys values entries

  const order = {
    salad: 100,
    bread: 30,
    milk: 40,
  };

  const keys = Object.keys(order);
  const values = Object.values(order);
  const entries = Object.entries(order);

  console.log(keys);
  console.log(values);
  console.log(entries);

  const calculatePrice = function(order) {
    const values = Object.values(order);
    let total = 0;

    console.group('@calculating');

    for (const value of values) {
      total += value;
    }

    console.groupEnd('@calculating');

    return total;
  };

  console.log(calculatePrice(order));
*/

// const obj = {
//   a: 5,
// };

// console.log(obj.b);
// console.log(obj.hasOwnProperty('b'));

