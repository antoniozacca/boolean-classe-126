'use strict';

// Chiediamo all'utente due età in successione.

// - definisco una variabile eta1 e salvo il valore di un prompt;

const eta1 = Number(prompt('Inserisci la prima età'));
console.log(eta1);

// - definisco una variabile eta2 e salvo il valore di un prompt;

const eta2 = Number(prompt('Inserisci la seconda età'));
console.log(eta2);

if (!isNaN(eta1) && !isNaN(eta2)) {
  console.log('entrambe sono eta e posso fare il calcolo o confronto');

  // - SE eta1 > eta2
  //   - stampo eta1 maggiore
  //     ELSE SE eta2 > eta1
  //   - stampo eta2 maggiore
  //     ELSE
  //   - stampo stessa età

  if (eta1 > eta2) {
    console.log('eta1 maggiore eta2');
  } else if (eta2 > eta1) {
    console.log('eta2 maggiore eta1');
  } else {
    console.log('coetanei');
  }
} else {
  console.log('errore, una delle due eta è sbagliata');
}

// const nEta1 = Number(eta1);

// - trasformo eta1 in numero
// - trasformo eta2 in numero

// - SE eta1 > eta2
//   - stampo eta1 maggiore
//     ELSE SE eta2 > eta1
//   - stampo eta2 maggiore
//     ELSE
//   - stampo stessa età
