const goRace = (name, delay = 0) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Car ${name} finished in ${delay}ms`);
    }, delay);
  });
};

const carA = goRace('car-A', 500);
const carB = goRace('car-B', 300);

Promise.race([carA, carB]).then(winner => console.log(winner));

Promise.all([carA, carB])
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.log(error);
  });

const foo = () => {
  // return new Promise((resolve, reject) => {
  //   resolve(5);
  // });

  return Promise.resolve(5);
};

foo().then(console.log);
