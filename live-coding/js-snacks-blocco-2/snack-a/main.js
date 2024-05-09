'use strict';
//scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array

//input
// const input = [undefined, undefined, undefined];
const input = new Array(5);
console.log(input);

//output
console.log(`La lunghezza dell'array è ${contaElementi(input)} elementi`);

//function

// function contaElementi(input) {
//   return input.length;

//   console.log(input);
// }

function contaElementi(input) {
  let count = 0;

  // while (input[count] !== undefined) {
  //   count++;
  // }

  while (input[count] !== undefined) {
    // if (input[count] === undefined) {
    //   break;
    // }
    count++;
  }

  return count;
}

// const inputLength = input.lengt;
// for (let i = 0; i < inputLength; i++) {
//   console.log(input[i]);
// }

const myArray = [1, 2, 3, 4, 5];
myArray.length = 0;
console.log(myArray.length);
console.log(myArray);
console.log(myArray[1]);
