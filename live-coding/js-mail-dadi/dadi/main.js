'use strict';

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

// - genero un numero random da 1 a 6 per il giocatore - randPlayer
// - genero un numero random da 1 a 6 per il computer - randComputer

// const randPlayer = Math.ceil(Math.random() * valoreMaxDadi);
// const randComputer = Math.ceil(Math.random() * valoreMaxDadi);

const dado = [5, 3, 1, 2, 4, 6]; //length = 6 - indici vanno da 0 5;

const valoreMaxDadi = dado.length;
const randPlayerIndex = Math.floor(Math.random() * valoreMaxDadi);
const randComputerIndex = Math.floor(Math.random() * valoreMaxDadi);

const randPlayer = dado[randPlayerIndex];
const randComputer = dado[randComputerIndex];

if (randPlayer === randComputer) {
  console.log(`avete pareggiato con il numero ${randPlayer}`);
} else if (randPlayer > randComputer) {
  console.log(`giocatore vince con ${randPlayer} contro ${randComputer}`);
} else {
  console.log(`computer vince con ${randComputer} contro ${randPlayer}`);
}

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// SE randPlayer === randComputer
// --- parità
// ELSE SE randPlayer > randComputer
// --- giocatore vince
// ELSE
// --- giocatore perde - computer vince
