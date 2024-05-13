'use strict';

console.log('calcolatrice');

// Riprendiamo l'esercizio della calcolatrice fatto con HTML e CSS e rendiamo il tutto funzionale.
// :avviso: Attenzione: la nostra calcolatrice deve fare dei semplici calcoli tra due numeri interi.

// Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato.

// Non si può applicare più di un'operazione alla volta.

// MILESTONE 1
// Aggiungere event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto

const result = document.getElementById('result');
const numbers = document.querySelector('.numbers');
console.log(result.innerText);

numbers.addEventListener('click', function (event) {
  console.log(event);

  const currentElement = event.target;

  console.log(currentElement);
  console.log(currentElement.innerText);

  if (isNaN(parseInt(currentElement.innerText))) return;
  // if (currentElement.innerText === '=') return;

  //arrivo a questa riga solo se il contenuto del bottone cliccato è diverso da =
  console.log('adesso sono un numero');

  console.log('ho cliccato su un bottone numero (??)');

  if (result.innerText === '0') {
    //sostituisco il valore iniziale
    result.innerText = currentElement.innerText;
  } else {
    //concateno con il valore iniziale
    result.innerText += currentElement.innerText;
  }
});
