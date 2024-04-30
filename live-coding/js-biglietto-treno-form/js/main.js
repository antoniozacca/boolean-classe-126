'use strict';

// console.log('Buongiorno Gaetano che piacere vederti!');

//bottone genera ticket
const generateButton = document.getElementById('generate-ticket');
const resetButton = document.getElementById('reset-ticket');

const generateTicketForm = document.getElementById('generate-ticket-form');

generateTicketForm.addEventListener('submit', function (event) {
  console.log('ho cliccato sul bottone genera');

  event.preventDefault();

  //html elements
  const ticketResultElement = document.getElementById('ticket-result');

  //input utente
  const userNameInput = document.getElementById('user-name-input');
  const ageInput = document.getElementById('age-input');
  const kmInput = document.getElementById('km-input');

  //output biglietto

  const userNameOutput = document.getElementById('user-name-output');
  const offerOutput = document.getElementById('offer-output');
  const carOutput = document.getElementById('car-output');
  const codeOutput = document.getElementById('code-output');
  const priceOutput = document.getElementById('price-output');

  console.dir(userNameInput);
  console.dir(userNameOutput);
  console.dir(offerOutput);
  console.dir(carOutput);
  console.dir(codeOutput);
  console.dir(priceOutput);

  //dati per il calcolo del biglietto

  const kmPrice = 0.21;
  const discountUnder = 20;
  const discountOver = 40;

  let price = kmPrice * Number(kmInput.value);
  let offerDescription = 'Offerta Standard';

  if (ageInput.value === 'under') {
    // price = price - (price / 100) * discountUnder;

    price -= (price / 100) * discountUnder;
    offerDescription = 'Offerta Under 18';
  } else if (ageInput.value === 'over') {
    // price = price - (price / 100) * discountOver;
    price -= -(price / 100) * discountOver;
    offerDescription = 'Offerta Over 65';
  }

  // console.log(ageInput.value);
  // console.log(kmInput.value);
  // console.log(price.toFixed(2));

  //mostro area del biglietto

  // console.log(ticketResultElement.classList);

  ticketResultElement.classList.remove('hidden');

  //popolo campi biglietto

  userNameOutput.innerText = userNameInput.value;
  offerOutput.innerText = offerDescription;
  priceOutput.innerText = `${price.toFixed(2)} €`;
});

// generateButton.addEventListener('click', function () {
//   console.log('ho cliccato sul bottone genera');

//   //html elements
//   const ticketResultElement = document.getElementById('ticket-result');

//   //input utente
//   const userNameInput = document.getElementById('user-name-input');
//   const ageInput = document.getElementById('age-input');
//   const kmInput = document.getElementById('km-input');

//   //output biglietto

//   const userNameOutput = document.getElementById('user-name-output');
//   const offerOutput = document.getElementById('offer-output');
//   const carOutput = document.getElementById('car-output');
//   const codeOutput = document.getElementById('code-output');
//   const priceOutput = document.getElementById('price-output');

//   console.dir(userNameInput);
//   console.dir(userNameOutput);
//   console.dir(offerOutput);
//   console.dir(carOutput);
//   console.dir(codeOutput);
//   console.dir(priceOutput);

//   //dati per il calcolo del biglietto

//   const kmPrice = 0.21;
//   const discountUnder = 20;
//   const discountOver = 40;

//   let price = kmPrice * Number(kmInput.value);
//   let offerDescription = 'Offerta Standard';

//   if (ageInput.value === 'under') {
//     // price = price - (price / 100) * discountUnder;

//     price -= (price / 100) * discountUnder;
//     offerDescription = 'Offerta Under 18';
//   } else if (ageInput.value === 'over') {
//     // price = price - (price / 100) * discountOver;
//     price -= -(price / 100) * discountOver;
//     offerDescription = 'Offerta Over 65';
//   }

//   // console.log(ageInput.value);
//   // console.log(kmInput.value);
//   // console.log(price.toFixed(2));

//   //mostro area del biglietto

//   // console.log(ticketResultElement.classList);

//   ticketResultElement.classList.remove('hidden');

//   //popolo campi biglietto

//   userNameOutput.innerText = userNameInput.value;
//   offerOutput.innerText = offerDescription;
//   priceOutput.innerText = `${price.toFixed(2)} €`;
// });

resetButton.addEventListener('click', function () {
  const ticketResultElement = document.getElementById('ticket-result');
  // const userNameInput = document.getElementById('user-name-input');
  // const ageInput = document.getElementById('age-input');
  // const kmInput = document.getElementById('km-input');
  // userNameInput.value = '';
  // ageInput.value = 'default';
  // kmInput.value = '';

  ticketResultElement.classList.add('hidden');
});
