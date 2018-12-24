/*
  'use strict';

  const user = {
    name: 'Mango',
    email: 'mango@mail.com',
    changeName(newName) {
      this.name = newName;

      console.log('this in changeName during user.changeName call: ', this);
    },
    showName() {
      console.log(this.name);
    },
  };

  // user.changeName('Poly');

  user.showName();

  const poly = {
    name: 'Poly',
  };

  poly.showName = user.showName;

  console.log(poly);

  poly.showName();
 */

// ====================================================
/*
  'use strict';

  function showName() {
    console.log(this.name);
    console.log(this);
  }

  const user = {
    name: 'Mango',
    email: 'mango@mail.com',
  };

  user.showName = showName;

  user.showName();
*/

// 'use strict';

// const showName = () => {
//   console.log(this);
//   console.log(this.name);
// };

/*
  const user = {
    name: 'Mango',
    email: 'mango@mail.com',
    showName() {
      console.log(this);
    },
  };

  user.showName = showName;

  user.showName();
*/

/*
  // 'use strict';

  // const user = {
  //   name: 'Mango',
  //   email: 'mango@mail.com',
  //   showThis() {
  //     console.log(this);
  //   },
  // };

  // user.showThis();

  // const fn = function(callback) {
  //   console.log(callback);
  //   callback();
  // };

  // fn(user.showThis);

  // fn(function showThis() {
  //   console.log(this);
  // });
*/

// const user = {
//   name: 'Mango',
//   email: 'mango@mail.com',
//   showThis() {
//     console.log(this);
//   },
// };

// user.showThis();

// const fn = function(callback) {
//   console.log(callback);
//   callback();
// };

// fn(user.showThis);

// 'use strict';

// const showName = function(...args) {
//   console.log(args);
//   console.log(this);
//   console.log(this.name);
// };

// const poly = {
//   name: 'Poly',
// };

// const mango = {
//   name: 'Mango',
// };

// showName.call(poly, 1, 2, 3, 4, 5);
// showName.call(mango, 'a', 'b', 'c');

// showName.apply(poly, [1, 2, 3, 4, 5]);
// showName.apply(mango, ['a', 'b', 'c']);

// const boundShowName = showName.bind(poly, 1, 2, 3, 4, 5);

// boundShowName();
// showName();
// 'use strict';

// const user = {
//   name: 'Mango',
//   email: 'mango@mail.com',
//   showThis() {
//     console.log(this);
//   },
// };

// user.showThis();

// const fn = function(callback) {
//   console.log('inside fn');
//   callback();
// };

// fn(user.showThis.bind(user));

// const user = {
//   name: 'Mango',
//   showName() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// document
//   .querySelector('button')
//   .addEventListener('click', user.showName.bind(user));

// 'use strict';

// function showName() {
//   console.log(this);
// }
// 'use strict';

// const dog = {
//   name: 'Mango',
//   showName() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const fn = function(callback) {
//   callback();
// };

// fn(dog.showName.bind(dog));

/*
  Рукописный bind

  const fn = function(...args) {
    console.log('args: ', args);
    console.log(this.name);
  };

  const bind = function(fnToBind, context, ...outerArgs) {
    console.log('outerArgs: ', outerArgs);

    return function(...innerArgs) {
      console.log('innerArgs: ', innerArgs);
      return fnToBind.apply(context, [...outerArgs, ...innerArgs]);
    };
  };

  const mango = { name: 'Mango' };
  const poly = { name: 'Poly' };

  const boundMangoFn = bind(fn, mango, 'a', 'b', 'c');
  const boundPolyFn = bind(fn, poly, 'x', 'y', 'z');

  boundMangoFn(1, 2, 3);
  boundPolyFn(4, 5);
*/
