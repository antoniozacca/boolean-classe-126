'use strict';

// const classe = ['Alessandro', 'Rachele', 'Nicola'];
// let count = 0;

// //fino a quando il contatore (count) è minore della lunghezza dell'array (classe) stampo 'sono meno della lunghezza dell'array' in console;

// console.log(classe);
// console.log(count);
// console.log(classe.length);
// while (count < classe.length) {
//   // debugger;
//   //true
//   console.log("sono meno della lunghezza dell'array");

//   //  count = count + 1;
//   //  count += 1;
//   count++;
//   // console.log(count);
// }

// console.log(
//   `il contatore è ${count} e la lunghezza dell'array è ${classe.length}`
// );

//data una lista della spesa stampa
//nella pagina tutti gli elementi della lista

const listaDellaSpesa = [
  'Pasta',
  'Verdure',
  'Farina',
  'Carne',
  'Porchetta',
  'Forchetta',
  'Scottex',
]; //array.length - 1 < array.length

const ul = document.getElementById('lista');
//const ul = document.querySelector('#lista')

//ciclo
for (let i = 0; i < listaDellaSpesa.length; i++) {
  // const li = `<li>${listaDellaSpesa[i]}</li>`;
  // ul.innerHTML += li;

  // ul.append(`<li>${listaDellaSpesa[i]}</li>`);

  //creando un elemento HTML > li
  const li = document.createElement('li'); //<li></li>

  li.innerText = listaDellaSpesa[i]; //<li>Verdure</li>

  li.classList.add('elemento-lista');

  ul.append(li); //<ul><li>Pasta</li><li>Verdure</li></ul>
}

let index = 0;

while (index < listaDellaSpesa.length) {
  console.log(index);
  console.log(listaDellaSpesa[index]);

  const li = document.createElement('li');
  li.append(listaDellaSpesa[index]);

  ul.append(li);

  //1000000 loc

  index++;
}
