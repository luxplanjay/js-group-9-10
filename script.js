'use strict';

// Передача по значению
// {
//   let a = 5;
//   let b = a;

//   console.log('a: ', a);
//   console.log('b: ', b);

//   a = 20;

//   console.log('a: ', a);
//   console.log('b: ', b);
// }

// Передача по ссылке
// {
//   const arrA = ['Mango'];
//   const arrB = arrA;

//   console.log('arrA === arrB: ', arrA === arrB);

//   console.log('arrA: ', arrA);
//   console.log('arrB: ', arrB);

//   arrA.push('Poly');
//   console.log('arrA: ', arrA);
//   console.log('arrB: ', arrB);

//   arrB.push('Ajax');
//   console.log('arrA: ', arrA);
//   console.log('arrB: ', arrB);

//   console.log('[1,2,3] === [1,2,3]: ', [1, 2, 3] === [1, 2, 3]);
// }

// Циклы
// {
//   let counter = 0;

//   while (counter < 10) {
//     console.log('counter: ', counter);

//     counter += 1;
//   }

//   console.log('after while');
// }

// {
//   const names = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
//   let i = 0;
//   const max = names.length;

//   while (i < max) {
//     console.log('i: ', i);
//     console.log('names[i]: ', names[i]);

//     i += 1;
//   }
// }

// {
//   const values = [];
//   const max = 5;
//   let counter = 0;

//   while (counter < max) {
//     let input = prompt('Введи что-то');

//     values.push(input);

//     // counter = counter + 1;
//     counter += 1;
//   }

//   console.log('values: ', values);
// }

// {
//   let userInput;

//   do {
//     userInput = prompt('Введите число от 1 до 5');

//     userInput = Number(userInput);

//     console.log(userInput);
//   } while (userInput < 1 || userInput > 5);
// }

// for

// {
//   const names = ['Mango', 'Poly', 'Ajax', 'Kiwi'];

//   for (let i = 0; i < names.length; i += 1) {
//     console.log('i: ', i);
//     console.log('names[i]: ', names[i]);
//   }

//   for (let i = 0; i < names.length; i += 1) {
//     console.log('i: ', i);
//     console.log('names[i]: ', names[i]);
//   }
// }

// {
//   const numbers = [98, 4, 76, 5, 27, 1, 8, 2];
//   let smallestNumber = numbers[0];

//   for (let i = 1; i < numbers.length; i += 1) {
//     const currentNumber = numbers[i];

//     console.log('i: ', i);
//     console.log('currentNumber: ', currentNumber);
//     console.log('smallestNumber: ', smallestNumber);

//     if (currentNumber < smallestNumber) {
//       smallestNumber = currentNumber;
//     }
//   }

//   console.log('smallestNumber: ', smallestNumber);
// }

// {
//   const numbers = [98, 4, 76, -20, 5, 27, 1, 8, 2];
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   console.log(smallestNumber);
// }

// {
//   const numbers = [98, 3, 17, 4, 76, -20, 34, 5, 27, 1, 8, 2];
//   const evenNumbers = [];

//   for (let i = 0, max = numbers.length; i < max; i += 1) {
//     const currentNumber = numbers[i];

//     if (currentNumber % 2 === 0) {
//       evenNumbers.push(currentNumber);
//     }
//   }

//   console.log(numbers);
//   console.log(evenNumbers);
// }

// {
//   const numbers = [98, 3, 17, 4, 76, -20, 34, 5, 27, 1, 8, 2];
//   const evenNumbers = [];

//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       evenNumbers.push(number);
//     }
//   }

//   console.log(numbers);
//   console.log(evenNumbers);
// }

// {
//   const numbers = [1, 2, 3, 4, 5];

//   for (let i = 0; i < numbers.length; i += 1) {
//     numbers[i] = numbers[i] * 2;
//   }

//   console.log(numbers);
// }

// {
//   const numbers = [1, 2, 3, 4, 5];

//   for (let number of numbers) {
//     number = number * 2;
//   }

//   console.log(numbers);
// }

// {
//   const clients = ['Mango', 'Poly', 'Ajax'];
//   const clientNameToFind = 'Poly';
//   let resultMsg = 'Не нашли!';

//   for (const client of clients) {
//     if (client === clientNameToFind) {
//       resultMsg = 'Нашли!';
//       break;
//     }
//   }

//   console.log(resultMsg);
// }

// Бесконечные циклы

// {
//   let userInput;

//   while (true) {
//     userInput = prompt(
//       'Выберите вариант доставки: 1 - самовывоз, 2 - курьер, 3 - почта',
//     );

//     if (userInput === null) break;

//     userInput = Number(userInput);

//     if (userInput >= 1 && userInput <= 3) break;
//   }

//   switch (userInput) {
//     case 1:
//       console.log('самовывоз');
//       break;
//     case 2:
//       console.log('курьер');
//       break;
//     case 3:
//       console.log('почта');
//       break;
//     default:
//       console.log('отмена');
//   }
// }

