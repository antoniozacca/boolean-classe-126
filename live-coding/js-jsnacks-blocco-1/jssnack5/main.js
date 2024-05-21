'use strict';

/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Se è dispari inseriscilo nell’array.
*/

//creo una variabile che contiene un array vuoto //inizio
const result = [];
//ciclo for che va da 1 a 6
//chiedo all'utente un numero con un prompt e lo inserisco in una variabile
const start = 1;
const end = 6;

for (let counter = start; counter <= end; counter++) {
  // console.log(counter);

  // const input = prompt(`Inserisci un numero - ${counter} di ${end}`);
  // console.log('input utente', input);
  // console.log('input utente in numero', parseInt(input));
  // console.log('risultato modulo ', parseInt(input) % 2);
  // console.log('dispari? ', parseInt(input) % 2 !== 0);

  const inputNum = parseInt(input);

  if (!isNaN(inputNum)) {
    // console.log('sono un numero');
    if (inputNum % 2 !== 0) {
      // console.log('pusho in array');
      result.push(inputNum);
    }
  } else {
    console.log('sono una stringa o comunque non sono un numero!');
  }
}

//stampo in console l'array risultante //fine
console.log(result);

//[]
