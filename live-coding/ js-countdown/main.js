'use strict';

// Simulare un count down di 10 secondi che alla fine dice "Buon anno!"
// Potete stampare il messaggio in pagina con un semplice alert.

//caso 1 - con istruzione condizionale

// let seconds = 10;

// const clock = setInterval(function () {
//   if (seconds === 0) {
//     alert('buon anno');

//     //chiamo funzione confetti
//     clearInterval(clock);
//   } else {
//     console.log(seconds);
//     seconds--;
//   }
// }, 1_000);

//caso 2 - con setTimeout

// let seconds = 10;

// const clock = setInterval(printCountDown, 1000);
// setTimeout(stopCountDown, seconds * 1000);

// function printCountDown() {
//   console.log(seconds);
//   seconds--;
// }

// function stopCountDown() {
//   clearInterval(clock);
//   alert('Buon anno');
// }

//parte contatore solo se non è gia definito un altro

// const buttonStart = document.getElementById('start');
// let counterId;
// console.log(buttonStart);

// buttonStart.addEventListener('click', function () {
//   if (counterId !== undefined) return;

//   counterId = setInterval(function () {
//     console.log('intervallo');
//   }, 1000);
// });
