// 'use strict';

// const classe = [
//   {
//     nome: 'Rachele',
//     webcam: true,
//     caratteristicheA: {
//       capelli: '',
//       coloreCapelli: '',
//       occhiali: true,
//     },
//     hobbies: ['nuoto', 'tennis'],
//   },

//   {
//     nome: 'Andrea',
//     webcam: true,
//     caratteristicheA: {
//       capelli: '',
//       coloreCapelli: '',
//       occhiali: true,
//     },
//     hobbies: ['nuoto', 'calcio'],
//   },

//   {
//     nome: 'Daniele',
//     webcam: true,
//     caratteristicheA: {
//       capelli: '',
//       coloreCapelli: '',
//       occhiali: true,
//     },
//     hobbies: ['padel', 'tennis'],
//   },

//   {
//     nome: 'Danilo',
//     webcam: false,
//     caratteristicheA: {
//       capelli: '',
//       coloreCapelli: '',
//       occhiali: true,
//     },
//     hobbies: ['corsa', 'judo'],
//   },

//   {
//     nome: 'Miriam',
//     webcam: false,
//     caratteristicheA: {
//       capelli: '',
//       coloreCapelli: '',
//       occhiali: true,
//     },
//     hobbies: ['bici', 'deltaplano'],
//   },

//   {
//     nome: 'Mattia',
//     webcam: false,
//     caratteristicheA: {
//       capelli: '',
//       coloreCapelli: '',
//       occhiali: true,
//     },
//     hobbies: [],
//   },

//   {
//     nome: 'Alessandro',
//     webcam: true,
//     caratteristicheA: {
//       capelli: '',
//       coloreCapelli: '',
//       occhiali: true,
//     },
//     hobbies: ['lettura', 'salto con asta'],
//   },
// ];

// const ul = document.querySelector('.lista');

// for (let i = 0; i < classe.length; i++) {
//   const currentObj = classe[i];
//   console.log(currentObj.caratteristicheA);

//   const li = document.createElement('li');

//   //stampo nome
//   const h2 = document.createElement('h2');
//   h2.append(currentObj.nome);
//   li.append(h2);

//   //stampo webcam
//   const p = document.createElement('p');
//   p.classList.add('webcam');

//   if (currentObj.webcam) {
//     p.innerText = 'webcam: si';
//   } else {
//     p.innerText = 'webcam: no';
//   }

//   li.append(p);

//   //stampo hobbies

//   console.log(currentObj.hobbies);

//   if (currentObj.hobbies.length) {
//     const ulHobbies = document.createElement('ul');

//     for (let i = 0; i < currentObj.hobbies.length; i++) {
//       const liHobby = document.createElement('li');
//       liHobby.innerText = currentObj.hobbies[i];
//       ulHobbies.append(liHobby);
//     }
//     li.append(ulHobbies);
//   }

//   ul.append(li);
// }

// window.myFunc();
//Otterremo Window

// prompt()
// alert()

// const divRed = document.querySelector('.red');
// divRed.addEventListener('click', myFunc);

// const divBlue = document.querySelector('.blue');
// divBlue.addEventListener('click', myFunc);

// function myFunc(e) {
//   console.log(e.target);
//   console.log(this);
// }

// console.log(this);

// function nomeFunzione() {
//   console.log('ciao');
// }

const nomeFunzione = function () {
  console.log('ciao');
};

nomeFunzione();

const nomeFunzioneArrow = () => console.log('ciao');

nomeFunzioneArrow();

// let x = miafunzione();

// function() {
//   console.log('ciao');
// };

// function sum(num1, num2) {
//   console.log(num1 + num2);
//   return num1 + num2;
// }

const sum = function (num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
};

const sum1 = (num1, num2) => {
  console.log(num1 + num2);
  return num1 + num2;
};

// const result1 = sum(1, 1);
// const result2 = sum1(1, 1);

// console.log(result1, result2);

const divRed = document.querySelector('.red');
divRed.addEventListener('click', myFunc);

const myFunctionArrow = (e) => {
  console.log(e.target);
  console.log(this);
};

const divBlue = document.querySelector('.blue');
divBlue.addEventListener('click', myFunctionArrow);

//funzione normale
function myFunc(e) {
  console.log(e.target);
  console.log(this);
}

//funzione arrow
let testReturn;
testReturn = () => {
  return 2 + 2;
};

console.log(testReturn());

const myFunction3 = () => {
  return 'pippo';
};
console.log(myFunction3());
