'use strict';

console.log('calcolatrice');

// Riprendiamo l'esercizio della calcolatrice fatto con HTML e CSS e rendiamo il tutto funzionale.
// :avviso: Attenzione: la nostra calcolatrice deve fare dei semplici calcoli tra due numeri interi.

// Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato.

// Non si può applicare più di un'operazione alla volta.

// MILESTONE 1
// Aggiungere event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto

// MILESTONE 2
// aggiungere event listener a tutti gli operatori: quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto

const result = document.getElementById('result');
const numbers = document.querySelector('.numbers');

numbers.addEventListener('click', handleNumbers);

/******+*
 * Functions
 ********/

function handleNumbers(event) {
  const currentElement = event.target;

  if (isNaN(parseInt(currentElement.innerText))) return;
  // if (currentElement.innerText === '=') return;
  if (result.innerText === '0') {
    //sostituisco il valore iniziale
    result.innerText = currentElement.innerText;
  } else {
    //concateno con il valore iniziale
    result.innerText += currentElement.innerText;
  }
}
