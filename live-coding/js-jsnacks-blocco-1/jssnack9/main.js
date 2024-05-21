'use strict';

/*
Snack 9
Calcola la somma e la media dei primi 10 numeri.

- definisco una variabile somma = 0;
- definisco una variabile media = 0;

for - va da 1 a 10
- somma - aggiungo indice del ciclo for;
fine for

- modifico la variabile media inserendo la somma ottenuta diviso il numero di numeri sommati (10)


Stampa i risultati on console

- stampo somma e media in console;


*/

// - definisco una variabile somma = 0;
// - definisco una variabile media = 0;
let sum = 0;
let avg = 0;

// ciclo- va da 1 a 10
for (let value = 1; value <= 10; value++) {
  // sum = sum + value;
  // somma - aggiungo indice del ciclo for;
  sum += value;
}
//modifico la variabile media inserendo la somma ottenuta diviso il numero di numeri sommati (10)
avg = sum / 10;
//stampa i risultati on console
console.log(`la somma è ${sum} e la media è ${avg}`);
