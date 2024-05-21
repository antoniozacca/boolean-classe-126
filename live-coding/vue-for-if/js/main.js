console.log('demo v-for');

const { createApp } = Vue;

// createApp({
//   data() {
//     return {
//       title: 'Demo V-FOR V-IF',
//     };
//   },
// }).mount('#app');

const defaultOptions = {
  data() {
    return {
      movie: {
        title: 'prova',
      },

      title: 'Demo V-FOR V-IF',
      showDiv: false,
      type: '',
      nLoops: 27,
      friends: ['Vincenzo', 'Alessandro', 'Luca', 'Samuele', 'Rachele'],
      friendsObj: [
        {
          nome: 'Vincenzo',
          eta: 20,
        },
        {
          nome: 'Alessandro',
          eta: 30,
        },
        {
          nome: 'Luca',
          eta: 27,
        },
        {
          nome: 'Samuele',
          eta: 18,
        },
        {
          nome: 'Rachele',
          eta: 20,
        },
      ],
    };
  },
  methods: {
    provaIf() {
      return false;
    },
    stampaOggetto() {
      console.log(this.friends);
    },
  },
};

const app = createApp(defaultOptions);
app.mount('#app');
// setTimeout(function () {

// }, 5000);
