'use strict';

//////////////////////////////////////////////////////////

//input utente (pari/dispari e numero)
let sceltaUtentePariDispari = prompt("Vuoi scegliere pari o dispari?");
let numeroUtente = prompt("Scegli un numero da 1 a 9:");

//aggiungere un controllo sugli input

//numero utente
let valoreNumerico = (parseInt(numeroUtente));
// valoreNumerico = valoreNumerico.toFixed(0);

//numero random computer
let numeroComputer = Math.floor(Math.random() * 10);

//controllo di valori
console.log(sceltaUtentePariDispari);
console.log(valoreNumerico);
console.log(numeroComputer);




//somma dei valori
let totaleNumero = (valoreNumerico + numeroComputer);
console.log(totaleNumero);

//ricerca del vincitore
let resto = totaleNumero % 2;
console.log(resto);
if (resto === 0 && sceltaUtentePariDispari === "pari") {
    document.getElementById("vincitore").innerHTML = "Per questa volta hai vinto tu!!";
} else if (resto !== 0 && sceltaUtentePariDispari === "dispari") {
    document.getElementById("vincitore").innerHTML = "Per questa volta hai vinto tu!!";
} else {
    document.getElementById("vincitore").innerHTML = "Ti ho battuto! I robot conquisteranno il mondo!";
}