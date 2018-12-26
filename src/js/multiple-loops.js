'use strict';

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let total = 0;

// for (const arr of matrix) {
//   console.log(arr);

//   for (const number of arr) {
//     console.log(number);

//     total += number;
//   }
// }

for (let i = 0; i < matrix.length; i += 1) {
  console.log(matrix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log(matrix[i][j]);

    total += matrix[i][j];
  }
}

console.log(total);
