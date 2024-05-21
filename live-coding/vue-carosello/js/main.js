'use strict';

console.log('sono carosello');

const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Sono un fantastico carosello',
      images: [
        'img/01.webp',
        'img/02.webp',
        'img/03.webp',
        'img/04.webp',
        'img/05.webp',
      ],
      currentIndex: 0,
    };
  },
  methods: {
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    setImage(val) {
      console.log(val);
      this.currentIndex = val;
    },
  },
}).mount('#app');
