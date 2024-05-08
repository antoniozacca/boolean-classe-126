'use strict';

// const input = prompt('Inserisci una parola');

const input = 'ossesso';

if (isPalindromo(input)) {
  console.log('è palindromo');
} else {
  console.log('non è palindromo');
}

/*
Function
*/

//esempio ciclo for
// function isPalindromo(input) {
//   if (input.length === 0) return false;
//   if (input.length === 1) return true;

//   let inverted = '';

//   for (let i = input.length - 1; i >= 0; i--) {
//     console.log(i);
//     console.log(input[i]);

//     inverted += input[i];
//   }

//   if (input === inverted) {
//     return true;
//   }
// }

//esempio while
function isPalindromo(input) {
  if (input.length === 0) return false;
  if (input.length === 1) return true;

  let start = 0;
  let end = input.length - 1;

  while (start < end) {
    //otranto
    //1 o !== 0
    //2 t !== t
    //3 r !== n
    if (input[start] !== input[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

//esempio one-line
// function isPalindromo(input) {
//   if (input.length === 0) return false;
//   if (input.length === 1) return true;

//   return input.split('').reverse().join('') === input;
// }
