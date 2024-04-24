'use strict';

// - definisco una variable firstName e le assegno il valore di un prompt;
const firstName = prompt('Inserisci il tuo nome');

// - definisco una variable lastName e le assegno il valore di un prompt;
const lastName = prompt('Inserisci il tuo cognome');

// - definisco una variable favouriteColor e le assegno il valore di un prompt;
const favouriteColor = prompt('Inserisci il tuo colore preferito');

// - definisco una variabile myNumber (21) che poi diventerà un numero casuale
const myNumber = '21'; //todo: generazione numero casuale (Bonus 2)

// - definisco una variabile password e le assegno la concatenazione di firstName + lastName + favouriteColor + myNumber
const myPassword = firstName + lastName + favouriteColor + myNumber;
// const passwordInterpolated = `${firstName}${lastName}${favouriteColor}${myNumber}`; //remind

// - inserisco all'interno del dom il valore di password
const htmlElement = document.getElementById('password');
htmlElement.innerHTML = myPassword;

// Bonus 1: visualizzate le informazioni anche nella console del browser;
console.log(myPassword);
