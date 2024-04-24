console.log('questa console viene sempre eseguita');

//true - false -> boolean
/*
2
stringhe
[]
{}
*/

// if (age === 40) {
//   //41 === 40 -> false
//   //true
//   //true
//   //codice da eseguire se si verifica la condizione
//   console.log('sono nella istruzione condizionale - 1');
// } else {
//   console.log('sono nella istruzione condizionale - 2');
// }

const age = 59; //quasi 41 ma non ditelo a nessuno

if ((age > 45 && age < 60) || age === 70) {
  //46-59
  console.log('sono nella istruzione condizionale - 1');

  if (age === 50) {
    console.log("ok l'età è di 50 anni");
  } else {
    console.log(`la tua età è ${age}`);
  }
} else if (age < 18) {
  // <18
  console.log('sono nella istruzione condizionale - 2');
} else if (age > 50) {
  //61-89
  console.log('sono nella istruzione condizionale - 3');
} else {
  //o console.log('sono nella istruzione condizionale - 1');pzionale
  console.log('sono nella istruzione condizionale - 4');
}

// if (age > 45 && age < 47) {
//   //46
//   console.log('operazione 1');
// } else if (age === 46) {
//   console.log('operazione 2');
// }

console.log('sono dopo istruzione condizionale');

// const stringa = "la città più calda del mondo è \"Siviglia\"";
