'use strict';

/***
 Comandi di gioco
 **/

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', campoMinato);

/***
Logica di gioco
 **/

function campoMinato() {
  //reset del gioco
  resetGame();

  const board = document.getElementById('board');
  const level = document.getElementById('select-level').value;

  //gestione del livello di gioco
  const cells = setLevel(level); //100, 81, 49

  //creazione griglia di gioco
  createBoard(board, cells);

  //logica di gioco
  //gameLogic()
}

function resetGame() {
  const board = document.getElementById('board');
  board.innerHTML = '';
}

/***
Funzioni accessorie
 **/

function createBoard(parametroBoard, cells) {
  const cols = Math.sqrt(cells);

  for (let i = 1; i <= cells; i++) {
    const cell = document.createElement('div');
    // cell.className = 'cell cell-10';
    cell.innerText = i;
    parametroBoard.append(cell);

    cell.classList.add('cell');
    cell.classList.add(`cell-${cols}`);
  }
}

function setLevel(level) {
  switch (level) {
    case 'level-1':
    default:
      return 100;

    case 'level-2':
      return 81;

    case 'level-3':
      return 49;
  }
}
