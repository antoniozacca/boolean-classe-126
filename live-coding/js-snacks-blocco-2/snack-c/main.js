'use strict';
//scrivere una funzione stampa() che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola

let input = [1, 2, undefined, 4, 5];

//output

console.log(`Il risultato è ${stampa(input)}`);

function stampa(input) {
  const inputLength = input.length;
  let result = '';

  for (let i = 0; i < inputLength; i++) {
    // console.log(input[i]);

    result += input[i];

    if (i < inputLength - 1) {
      result += ',';
    }
  }

  return result;
}
