'use strict';
// scrivere una funzione inserisciInTesta() che, dati un array A e un elemento E in input, restituisca un nuovo array B, con E in prima posizione e a seguire tutti gli elementi di A

const input = [1];
const element = 'ciao';

console.log(inserisciInTesta(input, element));

function inserisciInTesta(parametroInput, parametroElement) {
  let result = [parametroElement];

  for (let i = 0; i < parametroInput.length; i++) {
    result[i + 1] = parametroInput[i];
  }

  return result;
}
