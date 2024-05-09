'use strict';
// scrivere una funzione rimuoviDallaCoda() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne l'ultimo

const input = [1, 2, 3];

console.log(rimuoviDallaCoda(input));

function rimuoviDallaCoda(input) {
  let result = [];

  let inputLength = input.length - 1;

  for (let i = 0; i < inputLength; i++) {
    result[i] = input[i];
    // result.push(input[i]);
  }

  return result;
}
