'use strict';

// console.log(1);
// console.log(2);

// for (let i = 100; i < 1000; i++) {
//   console.log(i);
// }

// console.log(3);
// console.log(4);
// console.log(5);

// document.addEventListener('click', function(){
//   console.log('ciao');
// })

let sec = 3;

// setTimeout(function () {
//   console.log('ciao');
// }, sec * 1000);

// setTimeout(myFunction, 3000);

// function myFunction() {
//   alert('Hello');
// }

// setInterval(function () {
//   console.log('ciao');
// }, sec * 1000);

// let myInterval = setInterval(function () {
//   console.log('prova');
// }, sec * 1000);

// let myInterval2 = setInterval(function () {
//   console.log('prova');
// }, sec * 1000);

// console.log(myInterval);
// console.log(myInterval2);

// clearInterval(myInterval);

// const start = document.getElementById('start');
// const stop = document.getElementById('stop');
// const showCount = document.getElementById('show-count');

// let myInterval;
// let count = 0;

// console.log(start);
// console.log(stop);

// start.addEventListener('click', function () {
//   console.log('parte esecuzione funzione');

//   myInterval = setInterval(function () {
//     console.log('timer');
//     count++;

//     if (count === 5) {
//       clearInterval(myInterval); //15
//     }
//   }, 2000);
// });

// stop.addEventListener('click', function () {
//   console.log('stoppo esecuzione funzione');
//   console.log(myInterval);
//   clearInterval(myInterval);
//   // clearInterval()
// });

// showCount.addEventListener('click', function () {
//   console.log(count);
// });

// function myFunction() {
//   console.log('Ciao Asincrono');
// }

// setTimeout(myFunction, 3000); //stampa dopo 3 secondi

// console.log('Ciao'); //viene stampato per primo

// setTimeout(myFunction, 5000);
// setTimeout(myFunction2, 4000);
// setTimeout(myFunction3, 7000);
// setTimeout(myFunction4, 0);

// console.log('Ciao');
// console.log('Ancora un evento sincrono');

// // for (let i = 10; i < 1000; i++) {
// //   console.log(i);
// // }

// function myFunction() {
//   console.log('Ciao Asincrono 1');
// }

// function myFunction2() {
//   console.log('Ciao Asincrono 2');
// }

// function myFunction3() {
//   console.log('Ciao Asincrono 3');
// }

// function myFunction4() {
//   console.log('Ciao Asincrono 4');
// }

const input = parseInt(prompt('Quanti sono i minuti di cottura della pasta?'));

console.log(input);

setTimeout(function () {
  alert('la pasta è cotta');
}, input * 1000);
