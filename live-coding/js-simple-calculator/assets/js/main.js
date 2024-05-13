'use strict';

//schermo calcolatrice
const result = document.getElementById('result');

//bottoni numeri e operatori
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
//equal e canc
const equal = document.getElementById('equal');
const canc = document.getElementById('canc');

//valori di partenza
let myResult = 0;
let myOperator; //risultato corrente
let firstNumber = 0; //primo numero
let secondNumber = 0; //secondo numero

numbers.addEventListener('click', handleNumbers);
operators.addEventListener('click', handleOperators);
equal.addEventListener('click', handleResult);
canc.addEventListener('click', handleCanc);

/******+*
 * Functions
 ********/

function calculate(num1, num2, op) {
  switch (op) {
    case '+':
    default:
      console.log('somma');
      return num1 + num2;

    case '-':
      console.log('sottrai');
      return num1 - num2;

    case '*':
      console.log('moltiplica');
      return num1 * num2;

    case '/':
      console.log('dividi');

      if (num2 === 0) {
        resetCalculator();
        return 'error';
      }

      return num1 / num2;
  }
}

function handleCanc(event) {
  event.stopPropagation();
  resetCalculator();
}

function handleResult(event) {
  event.stopPropagation();

  //salvo secondo operando
  secondNumber = result.innerText;

  //eseguo calcolo
  myResult = result.innerText = calculate(
    Number(firstNumber),
    Number(secondNumber),
    myOperator
  );
}

function handleNumbers(event) {
  console.log('sono evento numbers / padre');
  const currentElement = event.target;

  //check;
  if (event.target.innerText.length !== 1) return;
  if (isNaN(parseInt(currentElement.innerText))) return;
  // if (currentElement.innerText === '=') return;
  if (result.innerText === '0' || myResult !== 0) {
    //sostituisco il valore iniziale
    result.innerText = currentElement.innerText;
    myResult = 0;
  } else {
    //concateno con il valore iniziale
    result.innerText += currentElement.innerText;
  }
}

function handleOperators(event) {
  const currentElement = event.target;

  //salvo operatore (data-set)
  myOperator = currentElement.dataset.operator;

  //salvo primo operando
  firstNumber = result.innerText;

  //resetto numero in alto
  result.innerText = 0;
}

function resetCalculator() {
  myResult = result.innerText = 0;

  //azzero valori
  firstNumber = 0;
  secondNumber = 0;
  myOperator = undefined;
}
