'use strict';

console.log('demo manipolazione del dom');


//selezione per ID
const element = document.getElementById('saluto');

console.log(typeof element)

// element.innerHTML = 'Ho cambiato il contenuto1';
// element.innerHTML = 'Ho cambiato il contenuto2';
// element.innerHTML = 'Ho cambiato il contenuto3';
// element.innerHTML = 'Ho cambiato il contenuto4';
// element.innerHTML = 'Ho cambiato il contenuto5';


console.log(element.innerHTML);

//selezione per selettore css

const elementQuerySelector = document.querySelector('.red');

console.dir(elementQuerySelector);

// elementQuerySelector.innerText = '<p class="test">Ciao sono un p</p>'
// // elementQuerySelector.innerText = 'Prova testo elemento';

//classList
console.log(elementQuerySelector.classList);

//object
elementQuerySelector.classList.add('classe-126');
elementQuerySelector.classList.remove('pizza');
elementQuerySelector.classList.toggle('prova');

//className
console.log(elementQuerySelector.className);

elementQuerySelector.className += ' ciao';



//style
console.log(elementQuerySelector.style);
elementQuerySelector.style.backgroundColor = 'red';
elementQuerySelector.style.fontSize = '5rem';

//value
const elementInput = document.querySelector('[type="text"]');

console.log(elementInput.value);
// elementInput.value = '';

//append

elementQuerySelector.append('prova append');
elementQuerySelector.prepend('prova prepend');

//eventListener

element.addEventListener('mouseover',

    function () {
        console.log('sono sopra elemento CIAO');
        element.innerHTML = 'Sono cambiato perchè over';
    }

);

element.addEventListener('mouseleave', function () {
    console.log('sono uscito da elemento CIAO');
    element.innerHTML = 'Sono cambiato perchè leave';
})


console.log('sono dopo il addEventListener');

//button random

const buttonRandom = document.getElementById('random');
// const buttonRandom = document.querySelector('button');
// const buttonRandom = document.querySelector('button#random');
// const buttonRandom = document.querySelector('#random');
// const buttonRandom = document.querySelector('.test');
// const buttonRandom = document.querySelector('#random.test');
console.dir(buttonRandom);

buttonRandom.addEventListener('click', function () {

    const randomNumber = Math.floor(Math.random() * 100);


    console.log('ho cliccato sul bottone');
    console.log({ randomNumber });

    alert('il numero generato è ' + randomNumber);

})

//button leggi testo

const buttonReadText = document.querySelector('.read-text');
console.dir(buttonReadText);

buttonReadText.addEventListener('click', function (eventoScatenato) {
    console.log(eventoScatenato);
    const elementInput = document.querySelector('[type="text"]');
    // const randomNumber = Math.floor(Math.random() * 100);
    // elementInput.value = randomNumber;
    console.log(elementInput.value);
})


elementInput.addEventListener('keyup', function (eventoScatenato) {
    // console.log(e);
    //console.log(elementInput.value);
    console.log(eventoScatenato);

    element.innerText += eventoScatenato.key;

})



const formGeneraDati = document.getElementById('formGeneraDati');



console.dir(formGeneraDati);

formGeneraDati.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('ho inviato il form');
})
