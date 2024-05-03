'use strict';

/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga
*/

//Prompt 1: prima parola
const word1 = prompt('Inserisci la prima parola');
//Prompt 2: seconda parola
const word2 = prompt('Inserisci la seconda parola');

if (word1.length < word2.length) {
  //verifico se la prima parola è più lunga della seconda parola
  console.log(`Parola 1: ${word1} - Lunghezza ${word1.length}`);
  console.log(`Parola 2: ${word2} - Lunghezza ${word2.length}`);
  console.log('La prima parola è più corta della seconda parola');
} else if (word2.length < word1.length) {
  //verifico se la seconda parola è più lunga della prima parola
  console.log(`Parola 2: ${word2} - Lunghezza ${word2.length}`);
  console.log(`Parola 1: ${word1} - Lunghezza ${word1.length}`);
  console.log('La seconda parola è più corta della prima parola');
} else {
  //verifico se le due parole hanno lunghezza equivalente
  console.log(`Parola 1: ${word1} - Lunghezza ${word1.length}`);
  console.log(`Parola 2: ${word2} - Lunghezza ${word2.length}`);
  console.log('Le parole hanno la stessa lunghezza');
}
