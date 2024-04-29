'use strict';

console.log('sono correttamente collegato al tuo index.html');

/* input utente */
//- chiedo il numero di chilometri all'utente e lo salvo in una variabile (kmUser)
const kmUser = Number(prompt('Inserisci il numero di km che vuoi percorrere (10.2, 10)'));
// const kmUser = parseFloat(prompt('Inserisci il numero di km che vuoi percorrere (10.2, 10)'));

// console.log('km:', kmUser);
console.log({ kmUser });
//- chiedo età passeggero e la salvo in una variabile(ageUser)
const ageUser = parseInt(prompt('Inserisci la tua età'));
console.log({ ageUser });


/* prezzi e sconti */
//salvo prezzo base dei km in una variabile(kmPrice)
const priceKm = 0.21;
//- imposto variabile che definisce eta minorenni(ageUnder = 18)
//- imposto variabile che definisce eta maggiorenni(ageOver = 65)
const ageUnder = 18;
const ageOver = 65;


//- setto una variabile underDiscount = 20
// - setto una variabile overDiscount = 40
const discountUnder = 20;
const discountOver = 40;
//calcolo il prezzo totale del biglietto
let price = priceKm * kmUser;
let priceDiscount = 0;
// console.log({ price });


if (ageUser < ageUnder) { //caso 1: minorenne
    console.log('utente minorenne, calcolo sconto');

    // price = price - (price / 100 * discountUnder);

    priceDiscount = (price / 100 * discountUnder);


} else if (ageUser >= ageOver) {
    console.log('utente over, calcolo sconto');

    priceDiscount = (price / 100 * discountOver);

    // price = price - (price / 100 * discountOver);
}



// price = price - priceDiscount;
price -= priceDiscount;

console.log(`Il prezzo finale del biglietto è ${price.toFixed(2)}€`);


