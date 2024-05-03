'use strict';


/*

ciclo for da 1 a 100
stampo valori in console


se valore (1..n) % 3 === 0
console FIZZ
else se valore (1..n) % 5 === 0
console BUZZ
else se valore (1..n) % 3 === 0 e (1..n) % 5 === 0
console FIZZBUZZ
else
console valore (1...n)




*/

const elementContainer = document.querySelector('.list');
console.log(elementContainer);


//innerHTML = '<li></li>'

for (let counter = 1; counter <= 100; counter++) {

    const liElement = document.createElement('li');
    let valueOutput;


    if (counter % 15 === 0) { //15
        console.log('FizzBuzz', counter);

        valueOutput = 'fizzbuzz';

        // liElement.className = 'fizzbuzz';
        // liElement.classList.add('fizzbuzz');
        // liElement.append('fizzbuzz');


    } else if (counter % 3 === 0) {
        console.log('Fizz', counter);
        // liElement.className = 'fizz';
        // liElement.classList.add('fizz');
        valueOutput = 'fizz';

        // liElement.append('fizz');
    } else if (counter % 5 === 0) {
        console.log('Buzz', counter);
        // liElement.className = 'buzz';
        // liElement.classList.add('buzz');
        valueOutput = 'buzz';

        // liElement.append('buzz');
    } else {
        console.log(counter);


        valueOutput = counter;
        // liElement.append(counter);
    }



    liElement.classList.add(valueOutput);
    liElement.append(valueOutput); //elemento li -> <li>valore</li> -> valore = stringa
    // liElement.textContent = valueOutput;

    elementContainer.appendChild(liElement); //elemento ul -> elemento HTML li -> <li>valore</li> -> <ul><li>valore</li></ul>
    // console.log(liElement);

    /*

    .append -> aggiungere ad un elemento contenuto testuale o elemento HTML - metodo
    .innerHTML -> attributo / proprietà -> '<p>ciao</p>' -> ciao
    .innerText -> attributo / proprietà -> '<p>ciao</p>' -> <p>ciao</p>
    .textContent -> attributo / proprietà -> '<p>ciao</p>' -> <p>ciao</p>









    */


}




console.log('buon lunedì');























//da italiano a js ma ci ho pensato

// if (counter % 15) { //15
//     console.log('FizzBuzz', counter);
// } else if (counter % 3 === 0) {
//     console.log('Fizz', counter);
// } else if (counter % 5 === 0) {
//     console.log('Buzz', counter);
// } else {
//     console.log(counter);
// }




// let tempOutput = '';

// //5

// if (counter % 3 === 0) { //15
//     // console.log('Fizz', counter);
//     tempOutput += 'fizz'; //riccardo
//     tempOutput = 'fizz'; //ste
// }


// //se counter % 3 === 0 - tempOutput = 'fizz' else '' (valore iniziale)


// if (counter % 5 === 0) {
//     // console.log('Buzz', counter);
//     tempOutput += 'buzz';
// }

// //tempOutp = 'fizz' => tempOutput => fizzBuzz
// //tempOutp = '' => tempOutput => 'buzz'


// if (tempOutput === '') {
//     tempOutput = counter;
// }

// console.log({ tempOutput });








//stampa con console prima

// console.log(counter);

// if (counter % 3 === 0 && counter % 5 === 0) { //15
//     console.log('FizzBuzz');
// } else if (counter % 3 === 0) {
//     console.log('Fizz');
// } else if (counter % 5 === 0) {
//     console.log('Buzz');
// }
// console.log('--');


//da italiano a js

// if (counter % 3 === 0) {
//     console.log('Fizz', counter);
// } else if (counter % 5 === 0) {
//     console.log('Buzz', counter);
// } else if (counter % 3 === 0 && counter % 5 === 0) {
//     console.log('FizzBuzz', counter);
// } else {
//     console.log(counter);
// }



// // da italiano 