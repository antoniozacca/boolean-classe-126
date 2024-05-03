'use strict';

const mailList = ['samuele', 'livington', 'asd', 'giulio', 'alan'];
let canAccess = false;

// const user = prompt('Inserisci il tuo').toLowerCase(); //input
const user = 'user';

for (let i = 0; i < mailList.length; i++) {
  if (mailList[i] === user) {
    canAccess = true;
    break;
  }
}

//logica di questo mondo
if (canAccess === true) {
  console.log('Puoi accedere');
} else {
  console.log('Non puoi accedere');
}
