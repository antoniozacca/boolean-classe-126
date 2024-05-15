'use strict';

/*
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.
*/

const automobili = [
  {
    marca: 'Fiat',
    modello: 'Panda',
    alimentazione: 'benzina',
  },
  {
    marca: 'Fiat',
    modello: 'Panda 1',
    alimentazione: 'diesel',
  },
  {
    marca: 'Fiat',
    modello: 'Panda 2',
    alimentazione: 'metano',
  },
];

const benzina = automobili.filter(
  (element) => element.alimentazione === 'benzina'
);

const diesel = automobili.filter(
  (element) => element.alimentazione === 'diesel'
);

const altre = automobili.filter(
  (element) =>
    element.alimentazione !== 'benzina' && element.alimentazione !== 'diesel'
);

console.log(benzina, diesel, altre);

/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
*/

const stringhe = ['pippo', 'PLUTO', 'Paperino'];

const result = stringhe.map(
  (element) => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase() //P + 'ippo' => Pippo ['Pippo', 'Pluto', 'Paperino']
);

/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/

const animali = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];

const mammiferi = animali.filter((animale) => animale.classe === 'mammiferi');

console.log(mammiferi);

/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const persone = [
  {
    nome: '',
    cognome: '',
    eta: 10,
  },
  {
    nome: '',
    cognome: '',
    eta: 27,
  },
  {
    nome: '',
    cognome: '',
    eta: 45,
  },
];

const result4 = persone.map((persona) => {
  let stringa = 'non può guidare';
  if (persona.eta > 18) {
    stringa = 'può guidare';
  }

  return {
    nome: persona.nome,
    cognome: persona.cognome,
    eta: persona.eta,
    quindi: stringa,
  };
});

console.log(result4);
