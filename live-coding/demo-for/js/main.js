'use strict';

// console.log('sono nel ciclo for');
// console.log('sono nel ciclo for');
// console.log('sono nel ciclo for');
// console.log('sono nel ciclo for');
// console.log('sono nel ciclo for');
// console.log('sono nel ciclo for');
// console.log('sono nel ciclo for');
// console.log('sono nel ciclo for');
// console.log('sono nel ciclo for');

// for (let i = 100; i > 10; i++) {
//   // console.log('sono nel ciclo for');
//   console.log(i);
// }

//y = ++x  // operatore pre incremento

// let x = 2;

// x = x + 1;

// let y = x;

//y = x++ // operatore post incremento

// let x = 2;

// let y = x;

// x = x + 1;

const ul = document.querySelector('ul.list');
// const ul = document.querySelector("ul");

// for (let index = 0; index < 10; index++) {
//   const element = `<li class="box box--${index}">${index}</li>`;
//   ul.innerHTML += element;

//   //oppure cosa possiamo utilizzare per aggiungere elementi al DOM?
// }

// const test = document.querySelector('.box');
// console.dir(test);

for (let index = 0; index < 10; index++) {
  const li = document.createElement('li');
  const myP = document.createElement('p');

  li.classList.add('prova');
  myP.classList.add('prova-p');

  myP.innerHTML = '<span>Ciao classe 126</span>';

  li.append(myP);
  li.addEventListener('click', function () {
    console.log('elemento ' + index);
  });
  ul.append(li);
}
