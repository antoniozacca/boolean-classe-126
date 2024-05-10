'use strict';

const somma = document.querySelector('.somma');
console.log(somma);

// const button = document.querySelector('button');
// const button = document.querySelectorAll('button');
// console.log(button);

// for (let i = 0; i < button.length; i++) {
//   const currentElement = button[i];

//   currentElement.addEventListener('click', function () {
//     console.log('ho cliccato bottone');
//   });
// }

// const grandparent = document.querySelector('.grandparent');

// grandparent.addEventListener('click', function () {
//   console.log('sono granparent');
// });

// const parent = document.querySelector('.parent');

// parent.addEventListener('click', function () {
//   console.log('sono parent');
// });

// const children = document.querySelector('.children');

// children.addEventListener('click', function () {
//   console.log('sono children');
// });

// const containerButton = document.querySelector('.btn-container');
// containerButton.addEventListener('click', function (e) {
//   console.log(e.target);
//   console.log(e.target.className);
//   console.log('ho cliccato su un bottone?');
// });

// document.querySelector('.grancontainer').addEventListener('click', function () {
//   console.log('sono nonno');
// });

// function main(){

//   evento function {

//     se number:

//     result =  funzioneNumeri()

//     se operatore:
//       result funzioneOperatore()

//     //operazione per stampare risultato
//     funzioneRisultato();

//   }

// }

//switch: usa SEMPRE operatore di IDENTITà / IDENTICITA

let num = 'testo1';

switch (num) {
  case 5: //num === 5
  case 'prova':
    console.log('sono il numero 5');

  case '5': //num === '5'
    console.log('sono la stringa 5');
    break;

  case 'testo1':
    console.log('ciao');

  case 'testo2':
    console.log('prova');
    break;

  default:
    console.log('sono default');
    break;
}

//if (num === 5 ) OR (num === '5') OR (num === default)
// console.log('sono il numero 5');
// console.log('sono la stringa 5');
//  console.log('sono default');

// if(num === 5)
//       console.log('sono il numero 5');

/*
console

rick
sono il numero 5
default

gian
alan
samu
giuseppe
sono il numero 5
sono il numero 5
default


*/

switch (true) {
  case num === 5:
    console.log('ciao sono numero 5');
    break;

  case !isNaN(num):
    console.log('qualcosa');
    break;

  case num !== 'ciao':
    console.log('sono diverso da ciao');
    break;

  default:
}
