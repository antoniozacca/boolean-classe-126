console.log('vue hello');

console.log(window.Vue);

//inizializziamo vue

const { createApp } = Vue;

const optionObj = {
  data() {
    return {
      title: '',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bfo7HKuqdd3i4nFcdGWRz6hniC6K7vB-SAOOenIoyg&s',
    };
  },
  methods: {
    prova() {
      console.log('sono la funzione prova');
      this.title = 'Nuovo messaggio';
    },
  },

  beforeCreate() {
    console.log(this.title);
    console.log('beforeCreate');
  },

  created() {
    console.log(this.title); //''
    console.log('created');
    this.prova();
  },

  beforeMount() {
    console.log(this.title);
    console.log('beforeMount');
  },

  mounted() {
    console.log(this.title);
    console.log('mounted');
  },

  beforeUpdate() {
    console.log('beforeUpdate');
    console.log(this.title);
  },
  updated() {
    console.log('updated');
    console.log(this);
    // setTimeout(function () {
    //   console.log(this);
    // }, 2000);

    setTimeout(() => {
      console.log(this);
    }, 2000);
  },
};

const app = createApp(optionObj);

app.mount('#app');
