'use strict';

/*
  Переменные
*/
// const message = 'Hello';
// console.log(message);
// alert(message);

/*
  ввод и вывод
 */
// const isGoing = confirm('Вы точно летите на отдых?');
// console.log(isGoing);

// const number = prompt('Введите число');
// console.log(typeof number);

/*
  Операторы сравнения
 */
// const x = 5;
// const y = 10;
// const z = 5;

// console.log('x === z: ', x === z);
// console.log('x !== z: ', x !== z);
// console.log('true == 1: ', true == 1);
// console.log('true === 1: ', true === 1);

/*
  Числа
 */

// const number = prompt('Введите число 5');

// console.log(number);
// console.log('Ввели ожидаемое число?: ', 5 === Number(number));

/*
  Parse
 */

// const widthInt = '25.75px';
// const widthFloat = '25.75px';
// let pixels;

// pixels = Number.parseInt(widthInt);
// console.log(pixels);

// pixels = Number.parseFloat(widthFloat);
// console.log(pixels);

/*
  NaN
 */

// const userInput = prompt('Введите число');

// const parsedUserInput = Number(userInput);

// console.log('Ввели число?: ', !Number.isNaN(parsedUserInput));

// '555'  -> 555 -> false
// 'qweqwe' -> NaN -> true

/* Floats */

// console.log(0.1 + 0.2 === 0.3);

// const number = 1.5;

// console.log(Math.round(number));

/*
  Строки
*/

// const message = 'Welcome to ';
// const hotelName = 'Sunlight hotel';

// console.log(message + hotelName);

// console.log(5111 + '5'); // '51115'

// const name = 'Mango is awesome';

// const inLowerCase = name.toLowerCase();
// const inUpperCase = name.toUpperCase();

// console.log(name);
// console.log(inLowerCase);
// console.log(inUpperCase);

// console.log(name.indexOf('awesome'));

// console.log(name.includes('qweqweqwe'));

// Интерполяция

// const guestName = 'Mango';
// const hotelName = 'Sunrise hotel';
// const days = 10;

// 'имя добро пожаловать в отель на дней';

// const message =
//   guestName + ' добро пожаловать в ' + hotelName + ' на ' + days + ' дней';

// const message = `${guestName} добро пожаловать в ${hotelName} на ${days} дней`;
// console.log(message);

const name = prompt('Введите имя', 'гость');

console.log(`Добро пожаловать ${name}`);
