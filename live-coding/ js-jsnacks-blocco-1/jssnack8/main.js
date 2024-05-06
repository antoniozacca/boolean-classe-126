'use strict';

/*
Snack 8

- definisco una variabile risultato a 0; (result)

Chiedi un numero di 4 cifre all’utente
-- creo una variabile input e salvo il risultato di un prompt (input)

Calcola la somma di tutte le cifre che compongono il numero.
Stampa il risultato in console

- stampo la variabile risultato  (result)
*/

let result = 0;

const input = '1111'; //stringa

// if(!isNaN(Number(input)))

//mi chiedo se input ha una lunghezza di 4 caratteri
if (input.length === 4) {
  //stringa lunga 4
  // const myNumber = Number(input);

  //hai inserito un numero?
  if (!isNaN(Number(input))) {
    //eseguo operazioni di somma
    console.log('faccio operazioni di somma');

    for (let index = 0; index < input.length; index++) {
      console.log(input[index]);

      // result += parseInt(input[index]);
      result += parseInt(input.charAt(index));
    }
  } else {
    console.log('inserisci un numero');
  }

  console.log('sono qui perchè la lunghezza è 4');
} else {
  console.log('il valore inserito non è della lunghezza corretta (4)');
}

console.log(result);
