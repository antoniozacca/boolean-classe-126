'use strict';

// var xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function () {
//   console.log(this.readyState);

//   if (this.readyState === 4 && this.status == 200) {
//     // Action to be performed when the document is ready;
//     const response = JSON.parse(this.response);
//     console.log(response.message);
//   }
// };

// xhttp.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
// xhttp.send();

// console.log(axios);

// // const response = axios
// //   .get('https://dog.ceo/api/breeds/image/random')
// //   .then((response) => {
// //     // console.log(response);
// //     console.log(response.data.message);
// //   });

// // console.log(response);
// // console.log('ciao');

// axios.get('https://api.sampleapis.com/beers/ale').then((response) => {
//   // console.log(response.data);

//   response.data.forEach((element) => console.log(element.name));
// });

const { createApp } = Vue;

// createApp({
//   data() {
//     return {
//       title: 'Prova titolo di pagina',
//       beers: [],
//       url: 'https://api.sampleapis.com/beers/ale',
//     };
//   },
//   methods: {
//     apiCall() {
//       axios.get(this.url).then((response) => {
//         // console.log(response.data);
//         console.log(response);
//         this.beers = response.data;
//       });
//     },
//   },

//   created() {
//     console.log('chiamata axios');
//     this.apiCall();
//   },
// }).mount('#app');

createApp({
  data() {
    return {
      cpuNumber: 0,
      userNumber: 0,
    };
  },
  created() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/int')
      .then((response) => {
        this.userNumber = response.data.response;
      });

    axios
      .get('https://flynn.boolean.careers/exercises/api/random/int')
      .then((response) => {
        this.cpuNumber = response.data.response;
      });
  },
}).mount('#app');
