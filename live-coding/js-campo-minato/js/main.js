'use strict';

/*************
 * Functions
 ************/

function createBoard(parametroBoard, cells) {
  const cols = Math.sqrt(cells); //100, 81, 49 -> 10, 9, 7

  for (let i = 1; i <= cells; i++) {
    const cell = document.createElement('div');
    // cell.className = 'cell cell-10';

    cell.innerText = i;
    cell.classList.add('cell');
    cell.classList.add(`cell-${cols}`);

    parametroBoard.append(cell);
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

    case 'level-4':
      return 4;
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bombsGenerator(bombsNumber, maxRange) {
  const bombs = [];

  //logica di creazione bombe
  while (bombs.length < bombsNumber) {
    const generatedBomb = getRndInteger(1, maxRange); //1, 49 - 1, 81 - 1, 100

    if (!bombs.includes(generatedBomb)) {
      bombs.push(generatedBomb);
    }
  }
  return bombs;
}

function gameLogic(boardGame, cellsNumber) {
  //config e bombe
  let play = true;
  let bombsNumber = 16;

  if (bombsNumber > cellsNumber) {
    bombsNumber = cellsNumber - 1;
  }

  //genero le bombe
  const bombs = bombsGenerator(bombsNumber, cellsNumber);

  // let score = 0;
  const score = []; //per verificare punteggio - lunghezza array

  const scoreElement = document.getElementById('result-output');
  scoreElement.innerText = `Score: ${score.length}`;

  //utente clicca su cella
  boardGame.addEventListener('click', function (event) {
    const currentElement = event.target;

    //se NON è una cella numero allora NON giochi
    if (!currentElement.classList.contains('cell')) return;
    //se play !== true NON giochi
    if (!play) return;

    const currentElementValue = parseInt(currentElement.innerText);

    if (score.includes(currentElementValue)) return;

    if (bombs.includes(currentElementValue)) {
      currentElement.style.backgroundColor = 'red';
      play = false;

      scoreElement.innerText += ' - Hai perso!';

      //svelo le bombe
      const elementsInBoard = document.querySelectorAll('.cell');

      for (let i = 0; i < elementsInBoard.length; i++) {
        const boardElement = elementsInBoard[i];

        const boardElementValue = parseInt(boardElement.innerText);

        if (bombs.includes(boardElementValue)) {
          boardElement.style.backgroundColor = 'red';
        }
      }
    } else {
      currentElement.style.backgroundColor = 'green';

      score.push(currentElementValue);
      scoreElement.innerText = `Score: ${score.length}`;

      //fine gioco - vinto
      if (score.length === cellsNumber - bombsNumber) {
        play = false;
        scoreElement.innerText += ' - Hai vinto!';
      }
    }
  });
}

/*************
 * Game Core
 ************/

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
  gameLogic(board, cells);
}

function resetGame() {
  const board = document.getElementById('board');
  board.innerHTML = '';

  const scoreElement = document.getElementById('result-output');
  scoreElement.innerText = '';
}

/*************
 * Game Executions
 ************/

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', campoMinato);
