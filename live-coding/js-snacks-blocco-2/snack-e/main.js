'use strict';
// scrivere una funzione rimuoviDallaTesta() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne il primo

const input = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(input);
console.log(rimuoviDallaTesta(input));

function rimuoviDallaTesta(parametroInput) {
  let result = [];
  const inputLength = input.length;

  for (let i = 1; i < inputLength; i++) {
    // result[i - 1] = input[i];
    result.push(parametroInput[i]);
  }

  return result;
}
