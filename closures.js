'use strict';

// Global env
//  Record: {}
// Parent: null

const makeCounter = function() {
  // makeCounter env
  //  Record: {}
  // Parent: Global env

  let counter = 0;
  // makeCounter env
  //  Record: {counter: 0}
  // Parent: Global env

  return function() {
    // anon env
    // Record: {}
    // Parent: makeCounter env
    counter += 1;
    console.log(counter);
  };
};

// Global env
//  Record: {makeCounter: <function>}
// Parent: null

const counter1 = makeCounter();

counter1();
counter1();
counter1();
counter1();

// console.dir(counter1)
console.dir(counter1);

const counter2 = makeCounter();

counter2();
counter2();
counter2();

console.dir(counter2);
