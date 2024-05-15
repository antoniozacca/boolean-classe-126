'use strict';

console.log('js our team');

/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

*/

const team = [
  {
    nome: 'Wayne Barrett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Angela Carroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg',
  },
  {
    nome: '',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg',
  },
];

// console.log(team);

// console.log(team[0]);
// console.log(team[1]);
// console.log(team[2]);
// console.log(team[3]);
// console.log(team[4]);
// console.log(team[5]);

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// for (let i = 0; i < team.length; i++) {
//   const person = team[i]; //oggetto
//   for (let key in person) {
//     //ciclare chiavi oggetto
//     console.log(`${key}: ${person[key]}`);
//   }

//   console.log('---');
// }

for (let person of team) {
  for (let key in person) {
    //ciclare chiavi oggetto
    console.log(`${key}: ${person[key]}`);
  }
  console.log('---');
}

/*
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

const teamList = document.getElementById('team-list');
console.log(teamList);

/*
<li>
  <h3>Nome Persona</h3>
  <h5>Ruolo persona</h5>
  <p>Immagine persona</p>
</li>
*/

// let liElement = '';

// for (let i = 0; i < team.length; i++) {
//   const person = team[i];

//   liElement += `
//   <li>
//     <h3>${person.nome}</h3>
//     <h5>${person.ruolo}</h5>
//     <p>${person.foto}</p>
//   </li>
// `;
// }

// teamList.innerHTML = liElement;

for (let i = 0; i < team.length; i++) {
  const person = team[i];
  console.log(person);

  //elemento li contenitore
  const liElement = document.createElement('li');
  console.log(liElement);

  const nomePersona = document.createElement('h3');
  if (person.nome !== '') {
    nomePersona.innerText = person.nome;
  } else {
    nomePersona.innerText = 'Nome non disponibile';
  }
  console.log(nomePersona);
  liElement.append(nomePersona);

  const ruoloPersona = document.createElement('h5');
  ruoloPersona.innerText = person.ruolo;
  console.log(ruoloPersona);
  liElement.append(ruoloPersona);

  const fotoPersona = document.createElement('p');
  fotoPersona.innerText = person.foto;
  console.log(fotoPersona);
  liElement.append(fotoPersona);

  const imgPersona = document.createElement('img');
  imgPersona.src = 'images/' + person.foto;
  imgPersona.alt = person.nome;
  liElement.append(imgPersona);
  console.dir(imgPersona);

  console.log(liElement);
  teamList.append(liElement);
}
