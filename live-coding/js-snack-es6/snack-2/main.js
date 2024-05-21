'use strict';

console.log('snack2');

/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

//valore di partenza
const teams = [
  {
    nome: 'Team 1',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Team 2',
    puntiFatti: 0,
    falliSubiti: 0,
  },
]; //2

console.log(teams);

//generiamo valori di punti fatti e falli subiti

const teamsModificato = teams.map((element, index, arr) => {
  // console.log(element);

  // return element; //obj
  return {
    ...element,
    falliSubiti: Math.random(),
    nuovaChiave: 'ciao',
  };

  /*
  {
      nome: 'Team 2',
    puntiFatti: 0,
    falliSubiti: 0,
  }


  */
});

console.log(teamsModificato);

// const result = teamsModificato.map((element) => {
//   return {
//     nome: element.nome,
//     falliSubiti: element.falliSubiti,
//   };
// });

// console.log(result);

//operatore spread

const myObj = {
  nome: 'Classe 126',
  quanti: 35,
  fame: true,
};

console.log();

const newObj = {
  ...myObj,
};

newObj.prova = true;

// console.log(myObj);
// console.log(newObj);

const obj1 = {
  nome: 'gaetano',
  cognome: 'frascolla',
  age: 41,
};

// const nome = obj1.nome;
// const cognome = obj1.cognome;
// const age = obj1.age;

// const { nome, age } = obj1;

// console.log(`Il mio nome è ${nome} e l'età è ${age}`);

pippo(obj1);

function pippo({ nome, age }) {
  // const nome = obj.nome;
  // const age = obj.age;

  const { nome, age } = obj;

  console.log(`Il mio nome è ${nome} e l'età è ${age}`);
}
