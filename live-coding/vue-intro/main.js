// 'use strict';

// const element = document.querySelector('h1');
// const inputElement = document.querySelector('input');

// console.log(element);
// console.log(inputElement);

// inputElement.addEventListener('input', function () {
//   console.log('ho premuto un tasto');

//   console.log(this.value);

//   element.innerHTML = this.value;
// });

const { createApp } = Vue;

createApp({
  data() {
    return {
      titoloPagina: 'Ciao classe 126',
      testoPagina:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum praesentium et incidunt perferendis necessitatibus aut culpa cupiditate nesciunt fuga consectetur assumenda suscipit dolorum ad sit, sapiente ipsam odio corporis magnam.',
      somma: 2 + 2,
      prova: 21,
      color: '',
      bgStyle: 'bg-dark',
      provaFunzione: this.greetings(),
    };
  },
  methods: {
    // greetings() {
    //   return 'ciao';
    // },
    demo: function () {
      console.log(this.prova);

      this.bgStyle = 'bg-light';
    },
    greetings() {
      this.titoloPagina = 'Questo è il mio saluto';
    },
  },
}).mount('#app');

//js

// const element = document.querySelector('#app');
// const emanuele = 'Hello vue';

// element.innerHTML = emanuele;
