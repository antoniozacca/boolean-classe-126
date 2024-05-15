'use strict';

// const students = ['Rachele', 'Mykola', 'Angelo'];

// for (let i = 0; i < students.length; i++) {
//   console.log(i);
//   console.log(students[i]);
// }

// //for..of

// for (let element of students) {
//   console.log(element);
// }

// //foreach

// students.forEach(function (element, index) {
//   console.log(element);
// });

// students.forEach((element, index) => console.log(element));

// function stampoElementi(element, index, arr) {
//   console.log(element);
// }

// students.forEach(stampoElementi);

const cats = [
  { name: 'Jerry', color: 'Gray' },
  { name: 'Felix', color: 'Black and White' },
  { name: 'Garfield', color: 'Orange' },
];

// const result = cats.forEach((element) => {
//   console.log(element);

//   console.log(`${element.name}'s color is ${element.color}`);
// });

// console.log(result);

const students = ['Rachele', 'Mykola', 'Angelo', 'Nicola', 'Simone'];

// console.log(students);

const resultStudent = students.forEach((element) => console.log(element));

const resultStudentMap = students.map((element) => {
  return element + ' classe 126';
});

// console.log(resultStudent);
// console.log(resultStudentMap);

const numbers = [11, 27, 30, 41, 50];

const quadrati = numbers.map((number) => undefined);

// console.log(quadrati);
// console.log(numbers);

const newResult = [];
for (let i = 0; i < numbers.length; i++) {
  newResult.push(numbers[i] * numbers[i]);
}

// console.log(newResult);

//filter

// const resultFilter = numbers.filter((element, i, arr) => {
//   //vuoi essere inserito nel nuovo array?
//   if (element % 2 === 0) return true;
// });

const resultFilter = numbers.filter((element) => element % 2 === 0);

const myArrayFilter = [];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  if (number % 2 === 0) {
    myArrayFilter.push(number);
  }
}

const newStudents = [
  {
    nome: 'Gaetano',
    eta: 41,
  },
  {
    nome: 'Annarita',
    eta: 18,
  },
  {
    nome: 'Tiago',
    eta: 20,
  },
  {
    nome: 'Rudy',
    eta: 50,
  },
];

console.log(newStudents);

const under = newStudents.filter((student) => {
  if (student.eta < 30) {
    return true;
  }
});

const over = newStudents.filter((student) => {
  if (student.eta > 30) {
    return true;
  }
});

console.log(under);
console.log(over);
