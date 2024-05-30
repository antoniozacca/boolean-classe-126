'use strict';

/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
NB: axios è la via :razzo:
https://axios-http.com/docs/intro
*/

// fetch('https://flynn.boolean.careers/exercises/api/random/mail', {
//   method: 'GET',
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     return data;
//   });

// axios
//   .get('https://flynn.boolean.careers/exercises/api/random/mail')
//   .then((response) => {
//     console.log(response.data.response);
//   })
//   .catch((error) => console.log(error));

const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Vue email list',
      emails: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      nCall: 10,
    };
  },
  methods: {
    callEmail() {
      axios.get(this.apiUrl).then((response) => {
        this.emails.push(response.data.response);
      });
    },
  },

  created() {
    for (let i = 0; i < this.nCall; i++) {
      this.callEmail();
    }

    while (this.emails.length < this.nCall) {
      this.callEmail();
    }
  },
}).mount('#app');
