'use strict';

const userPariDispari = 'pari'; //input utente - può essere valore di un prompt
const userNumber = getRndInteger(1, 5); //input utente - può essere valore di un prompt
const cpuNumber = getRndInteger(1, 5);
const sumNumbers = userNumber + cpuNumber;

if (pariODispari(sumNumbers) === userPariDispari) {
  console.log('utente vince');
} else {
  console.log('computer vince');
}

/*
Functions
*/

//pari o dispari

function isPari(num) {
  if (num % 2 === 0) return true;
  //1000 loc
  return false;
}

function pariODispari(num) {
  if (isPari(num)) return 'pari';

  return 'dispari';
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * max) + min;
  // return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}
