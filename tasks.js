function checkForSpam(str) {
  const spam = 'spam';
  const sale = 'sale';

  const strToLow = str.toLowerCase();

  console.log(
    'strToLow.includes("spam") || strToLow.includes("sale"): ',
    strToLow.includes('spam') || strToLow.includes('sale'),
  );

  const hasProhibitedWord =
    strToLow.includes('spam') || strToLow.includes('sale');

  return hasProhibitedWord;
  // if (hasProhibitedWord) return true;

  // return false;
}

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

/*
  Напишите скрипт который:

  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'

  PS: используйте конструкцию if..else.
*/

// const input = prompt('Введите произвольное целое число');

// if (input === null) {
//   alert('Приходите еще!');
// } else if (Number(input) % 1 === 0) {
//   alert('Спасибо!');
// } else {
//   alert('Необходимо было ввести целое число!');
// }

// // Global env
// // Record: {}
// // Parent: null
// let x = 10;
// // Global env
// // Record: {x: 10}
// // Parent: null

// let y = 20;
// // Global env
// // Record: {x: 10, y: 20}
// // Parent: null

// // [[Environment]]: Global env
// const foo = function(z) {
//   // foo env
//   // Record: {z: 30}
//   // Parent: Global env
//   let x = 100;
//   // foo env
//   // Record: {z: 30, x: 100}
//   // Parent: Global env

//   x = 200;
//   // foo env
//   // Record: {z: 30, x: 200}
//   // Parent: Global env

//   return x + y + z;
// };
// // Global env
// // Record: {x: 10, y: 20, foo: <function>}
// // Parent: null

// foo(30); // 250

// foo();

// function foo() {
//   console.log('erere');
// }
// ===========
