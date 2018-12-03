'use strict';

// const names = ['Mango', 'Poly', 'Ajax'];

// console.log(names);
// console.log('length: ', names.length);

// names[0] = 'Kiwi';
// console.log(names);
// console.log('length: ', names.length);

// names[3] = 'Mango';
// console.log(names);
// console.log('length: ', names.length);

// console.log(names[600]);
// console.log('length: ', names.length);

// names[5] = 'Chelsey';
// console.log(names);
// console.log('length: ', names.length);

// names.length = 2;
// console.log(names);

// matrix
// const matrix = [[1, 2, 3], [4, 5, 6, ['a', 'b', 'c']], [7, 8, 9]];
// console.log(matrix);
// console.log(matrix[1][3][1]);

// Split & Joing

// const message = 'Hello JS world';
// const arr = message.split(' ');

// console.log(arr);

// const newMessage = arr.join(' <-> ');
// console.log(newMessage);

//  indexOf() и includes()
// const numbers = [6, 8, 10, 15, 25, 30, 47];
// const min = numbers[0];
// const max = numbers[numbers.length - 1];

// const input = prompt(`Угадайте число от ${min} до ${max}`);

// const value = Number(input);

// const isInArray = numbers.includes(value);

// if (isInArray) {
//   console.log('Угадали!');
// } else {
//   console.log('Не угадали!');
// }

// push(), pop(), shift(), unshift()

// const names = ['Mango', 'Ajax', 'Poly'];

// names.push('Kiwi', 123);
// console.log(names);

// names.pop();
// console.log(names);

// names.shift();
// console.log(names);

// names.unshift('a', 'b');
// console.log(names);

// Array.slice()

// const names = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// const newNames = names.slice(0, 2);

// console.log('newNames: ', newNames);

// Array.splice()

// const names = ['Mango', 'Poly', 'Ajax', 'Kiwi'];

// const deletedEls = names.splice(1, 3);
// console.log('удаленные элементы: ', deletedEls);
// console.log(names);

// names.splice(2, 0, 'Chelsey', 'Monkong');
// console.log(names);

// names.splice(1, 2, 'a', 'b');
// console.log(names);

// Array.concat()

// const oldNames = ['Mango', 'Poly'];
// const newNames = ['Kiwi', 'Ajax'];

// const allNames = oldNames.concat(newNames);
// const allNames = [].concat(oldNames, newNames);

// console.log('oldNames: ', oldNames);
// console.log('newNames: ', newNames);
// console.log('allNames: ', allNames);

