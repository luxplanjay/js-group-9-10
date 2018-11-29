'use strict';

// const value = 8;

// console.log('value > 5 && value < 10: ', value > 5 && value < 10);
// console.log('value < 5 || value > 10: ', value < 5 || value > 10);

// const value = 10;

// if (value > 5) {
//   console.log('Больше 5!');
// } else if (value < 5) {
//   console.log('Меньше 5!');
// } else {
//   console.log('Равно пяти!');
// }

// // else {
// //   console.log('Меньше 5!');
// // }

// console.log('Код после if!');

// const value = 5;
// let message;

// if (value > 5) {
//   message = 'Больше 5';
// } else {
//   message = 'Меньше 5';
// }

// message = value > 5 ? 'Больше 5' : 'Меньше 5';

// if else if ...
// const userInput = prompt('Введите положительное число!');
// let message = '';

// // !null -> !false -> true
// // алтернатива userInput === null
// if (!userInput) {
//   message = 'Была нажата отмена!';
// } else if (Number(userInput) > 0) {
//   message = `Ввели число ${Number(userInput)}`;
// } else {
//   message = 'Невалидные данные!';
// }

// console.log(message);

// switch
// let userInput = prompt(
//   'Варианты доставки: 0 - самовывоз, 1 - курьер, 2 - новая почта',
// );
// let message;

// if (!userInput) {
//   console.log('Отмена!');
// } else {
//   userInput = Number(userInput);

//   // if (userInput === 0) {
//   //   console.log('самовывоз');
//   // } else if (userInput === 1) {
//   //   console.log('курьер');
//   // } else if (userInput === 2) {
//   //   console.log('новая почта');
//   // } else {
//   // неверный ввод
//   // }

//   switch (userInput) {
//     case 0:
//       console.log('самовывоз');
//       break;
//     case 1:
//       console.log('курьер');
//       break;
//     case 2:
//       console.log('новая почта');
//       break;

//     default:
//       console.log('неверный ввод');
//   }

//   console.log('после switch');
// }

/*
  Напишите скрипт который:

  - Через prompt cпрашивает 'Введите произвольное число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'

  PS: используйте конструкцию if..else.
*/

// const userInput = prompt('Введите произвольное число');

// if (!userInput) {
//   alert('Приходите еще!');
// } else if (!Number.isNaN(Number(userInput))) {
//   alert('Спасибо!');
// } else {
//   alert('Необходимо было ввести число!');
// }

// let x = 'qwe';
// x = Number(x);

// // x = 5 -> false -> !false -> true
// // x = NaN -> true -> !true -> false
// const isNumber = !Number.isNaN(x);

// console.log(isNumber);

// const isAdmin = true;
// const isLoggedIn = false;

// if (isAdmin && isLoggedIn) {
//   console.log('запускаю!');
// } else {
//   console.log('нет прав!');
// }

// prompt('wewe') и нажали cancel и вернулось null
// const value = null;

// if (!value) {
//   console.log('отмена');
// }

// const isLoggedIn = false;

// if (!isLoggedIn) {
//   console.log('не залогинен');
// }

// const price = 10;

// let applesAmount = 50;

