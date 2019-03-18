// ***************************************
// const symb1 = Symbol('my cool symbol');
// const symb2 = Symbol('my cool symbol');

// const user = { name: 'Mango' };

// user[symb1] = 'secret value 1';

// user[symb2] = 'secret value 2';

// console.log(user);
// console.log(user[symb1]);
// console.log(user[symb2]);

// ***************************************

// function createIterator(numbers) {
//   let counter = 0;

//   return {
//     next() {
//       return {
//         done: counter >= numbers.length,
//         value: counter < numbers.length ? numbers[counter++] : undefined,
//       };
//     },
//   };
// }

// const iterator = createIterator([1, 2, 4, 5]);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// ***************************************

// const calendar = {
//   dates: [1, 2, 3, 4, 5],
//   [Symbol.iterator]() {
//     let counter = 0;
//     const dates = this.dates;
//     const max = dates.length;

//     return {
//       next() {
//         return {
//           done: counter >= max,
//           value: counter < max ? dates[counter++] : undefined,
//         };
//       },
//     };
//   },
// };

// for (const date of calendar) {
//   console.log(date);
// }

// ***************************************
// function* myGenerator() {
//   yield 1;
//   console.log('after yield 1');
//   yield 2;
//   console.log('after yield 2');
//   yield 3;
//   console.log('after yield 3');
// }

// const gen = myGenerator();

// console.log(gen.next());
// console.log('qweqweqwe');
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// for (const value of gen) {
//   console.log(value);
// }

// ***************************************
// const myGenerator = function*(max) {
//   for (let i = 0; i < max; i += 1) {
//     yield i;
//   }
// };

// const generator = myGenerator(5);

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// ***************************************
// const questionGenerator = function*() {
//   const answer = yield 'Сколько будет 5 + 5?';

//   if (answer === 10) {
//     console.log('правильно');
//   } else {
//     const isSure = yield 'Точно????';

//     console.log(isSure);

//     if (isSure === 'yes') {
//       console.log('ну ладно ))))');
//     } else {
//       console.log('тогда попробуй еще');
//     }
//   }
// };

// const question = questionGenerator();

// console.log(question.next());
// console.log(question.next(20));
// console.log(question.next('yes'));
