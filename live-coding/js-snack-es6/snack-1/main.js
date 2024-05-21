'use strict';

console.log('js snack 1');

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando template literal

*/

// const bikes = ['bike1', 10, 'bike2', 20, 'bike3', 5];
// const bikes = [
//   {
//     nome: 'Bike 1',
//     peso: 25,
//     // unitaMisuraPeso: 'kg'
//   },
//   {
//     nome: 'Bike 2',
//     peso: 17,
//     // unitaMisuraPeso: 'kg'
//   },
//   {
//     nome: 'Bike 3',
//     peso: 7,
//     // unitaMisuraPeso: 'kg'
//   },
//   {
//     nome: 'Bike 4',
//     peso: 13,
//     // unitaMisuraPeso: 'kg'
//   },
//   {
//     nome: 'Bike 5',
//     peso: 21,
//     // unitaMisuraPeso: 'kg'
//   },
// ];

// console.log(bikes[0]);
// console.log(bikes[1]);
// console.log(bikes[2]);
// console.log(bikes[3]);
// console.log(bikes[4]);
// 5;

// console.log(bikes);

//for
// for (let i = 0; i < bikes.length; i++) {
//   console.log(bikes[i]);
// }

//for..of
// for (let bike of bikes) {
//   console.log(bike);
// }

//foreach

// console.log(biciLeggera);

// bikes.forEach((bike, index, array) => {
//   console.log(bike);

//   if()

// });

const bikes = [];

// let pesoLeggero = bikes[0].peso; //25
let pesoLeggero = Number.MAX_SAFE_INTEGER;

//for
for (let i = 0; i < bikes.length; i++) {
  // console.log(bikes[i]);

  const pesoAttuale = bikes[i].peso; //8 8 7 13 21

  if (pesoAttuale < pesoLeggero) {
    pesoLeggero = pesoAttuale;
  }

  // if (biciAttuale.peso === biciLeggera.peso) {
  //   console.log(biciAttuale);
  // }
}

console.log(pesoLeggero);

// const biciLeggere = bikes.filter((bike, i, arr) => {
//   if (bike.peso === pesoLeggero) {
//     return true;
//   }
// });

const biciLeggere = [];
for (let i = 0; i < bikes.length; i++) {
  if (bikes[i].peso === pesoLeggero) {
    biciLeggere.push(bikes[i]);
  }
}

console.log(biciLeggere);

//primo elemento della nostra lista
