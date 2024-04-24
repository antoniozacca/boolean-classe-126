'use strict';

// Chiediamo all'utente due parole in successione.
// - definisco una variabile parola1 e salvo il valore di un prompt;

const parola1 = prompt('Inserisci la prima parola');
console.log('parola1: ', parola1);

// - definisco una variabile parola2 e salvo il valore di un prompt;

const parola2 = prompt('Inserisci la seconda parola');
console.log('parola2: ', parola2);

// - definisco una variabile (opzionale) e salvo la lunghezza della parola 1 - lparola1

const lParola1 = parola1.length;
console.log('lunghezza parola1: ', lParola1);

// - definisco una variabile (opzionale) e salvo la lunghezza della parola 2 - lparola2

const lParola2 = parola2.length;
console.log('lunghezza parola2: ', lParola2);

// Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

// - SE lparola1 > lparola2
//   - stampo parola 1 lunga
//   ELSE SE lparola2 > lparola1
//   - stampo parola 2 lunga
//   ELSE
//   - stampo le parole hanno la stessa lunghezza

if (lParola1 > lParola2) {
  console.log('la parola 1 è più lunga di parola 2');
  console.log(`${parola1} è più lunga di ${parola2}`);
} else if (lParola2 > lParola1) {
  console.log('la parola 2 è più lunga di parola 1');
  console.log(`${parola2} è più lunga di ${parola1}`);
} else {
  console.log('la parola 1 è lunga come parola 2');
  console.log(`${parola1} è lunga come ${parola2}`);
}

console.log('esco di casa');
