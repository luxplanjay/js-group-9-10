'use strict';

/**
  const add = function(x, y) {
    console.log('x: ', x);
    console.log('y: ', y);

    return x + y;
  };

  const result1 = add(5, 15);

  const result2 = add(10, 20);

  console.log('result1: ', result1);
  console.log('result2: ', result2);
 */

/* Параметры по умолчанию


 const add = function(x = 5, y = 10) {
    console.log('x: ', x);
    console.log('y: ', y);

    return x + y;
  };

  const result = add(20);
  console.log('result: ', result);
 */

/* Ищем самое маленькое число в произвольном массиве

 const numbers1 = [98, 4, 76, 5, 27, 1, 8, 2];
  const numbers2 = [128, 4, 276, 15, 27, 21, 8, 2];
  const numbers3 = [2398, 34, 716, 215, 27, 41, 8, 42];

  const findSmallestNumber = function(arr) {
    let smallestNumber = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
      const currentNumber = arr[i];

      if (currentNumber < smallestNumber) {
        smallestNumber = currentNumber;
      }
    }

    return smallestNumber;
  };

  console.log(findSmallestNumber(numbers1));
  console.log(findSmallestNumber(numbers2));
  console.log(findSmallestNumber(numbers3));
 */

/* Чистые и грязные функции

  const pureDouble = function(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i += 1) {
      newArr.push(arr[i] * 2);
    }

    return newArr;
  };

  const dirtyDouble = function(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = arr[i] * 2;
    }
  };

  const dirtyNumbers = [1, 2, 3, 4, 5];
  const pureNumbers = [1, 2, 3, 4, 5];

  dirtyDouble(dirtyNumbers);
  console.log(dirtyNumbers); // [2,4,6,8,10]

  const doubledNumbers = pureDouble(pureNumbers);
  console.log(pureNumbers);
  console.log('doubledNumbers: ', doubledNumbers);
  */

/* Псевдомассив arguments
  const add = function() {
    console.log(arguments);

    const args = Array.from(arguments);
    console.log('args: ', args);

    let total = 0;

    for (let i = 0; i < args.length; i += 1) {
      total += args[i];
    }

    return total;
  };

  console.log(add(5, 10));
  console.log(add(5, 10, 15));
  console.log(add(5, 10, 15, 20));

  const fn = function(arr, ...values) {
    // То же самое что
    // const args = Array.from(arguments);
    // const arr = args[0];
    // const values = args.slice(1);

    console.log('arr: ', arr);
    console.log('values: ', values);
  };

fn([1, 2, 3], 3, 4, 5);
fn([4, 6, 7], 9, 4, 12, 19);
*/

/*
function buildLaser() {
  const message = 'Laser Built';
  console.log(message);
}

function buildMoonBase() {
  const message = 'Moon Base Built';
  buildLaser();
  console.log(message);
}

function ransomTheWorld() {
  const message = "Give us moneys u puny hoomans or else it's lazer time!";
  buildMoonBase();
  console.log(message);
}

ransomTheWorld();

console.log('DONE!');
 */

