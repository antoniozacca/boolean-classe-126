'use strict';
// scrivere una funzione inserisciInTesta() che, dati un array A e un elemento E in input, resituisca un nuovo array B, con E in prima posizione e a seguire tutti gli elementi di A

const input = [];

function inserisciInTesta(input, element) {
  let result = [element];

  for (let i = 0; i < input.length - 1; i++) {
    result[i + 1] = input[i];
  }

  return result;
}

console.log(inserisciInTesta(input, 10));
