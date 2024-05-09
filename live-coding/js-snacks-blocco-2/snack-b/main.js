'use strict';
// scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1

//input
let input = [1, undefined, 3, 4, 5, 6];
let findElement = undefined;

//output
console.log(
  `L'elemento si trova in posizione ${trovaIndice(input, findElement)}`
);

//function

// function trovaIndice(input, element) {
//   let inputLength = input.length;

//   for (let i = 0; i < inputLength; i++) {
//     console.log(input[i]);

//     if (input[i] === element) {
//       return i;
//       // break;
//     }
//   }

//   // console.log(i);

//   return -1;
// }

function trovaIndice(input, element) {
  let index = 0;
  const inputLength = input.length;

  while (index < inputLength && input[index] !== element) {
    index++;
  }

  if (index === inputLength) {
    return -1;
  } else {
    return index;
  }
}

// function trovaIndice(input, element) {
//   let index = 0;

//   while (input[index] !== undefined) {
//     if (input[index] === element) {
//       return index;
//     }
//     index++;
//   }

//   return -1;

// }
