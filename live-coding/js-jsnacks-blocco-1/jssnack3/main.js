'use strict';

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

//risultato da stampare
let result = 0;

//quanti numeri vengono richiesti all'utente
const count = 10;

for (let i = 1; i <= count; i++) {
  //prompt: richiesta all'utente
  const currentNumber = Number(
    prompt(`${i} di ${count} - Inserisci un numero`)
  );

  //verifico se l'utente è furbo
  if (!isNaN(currentNumber)) {
    console.log(`${i} - Hai inserito il numero ${currentNumber}`);
    //sommo il numero al risultato
    result += currentNumber;
    console.log(`${i} - La somma a questo punto è ${result}`);
  } else {
    console.log(
      `${i} - Hai inserito un valore non numerico che è stato escluso dalla somma`
    );
    // i = i - 1;
    i--;
  }
}

//stampo il risultato finale
console.log(`La somma di tutti i numeri inseriti è ${result}`);
