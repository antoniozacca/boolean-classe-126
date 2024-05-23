// const product = {
//   name: 'iPhone 13',
//   price: 1190,
//   options: [
//     {
//       text: '128 GB',
//       plus: 0,
//     },
//     {
//       text: '256 GB',
//       plus: 100,
//     },
//     {
//       text: '512 GB',
//       plus: 200,
//     },
//   ],
//   colors: ['black', 'blue', 'green', 'purple'],
// };

const { createApp } = Vue;

createApp({
  data() {
    return {
      product: {
        name: 'iPhone 13',
        price: 1190,
        options: [
          {
            text: '128 GB',
            plus: 0,
          },
          {
            text: '256 GB',
            plus: 100,
          },
          {
            text: '512 GB',
            plus: 200,
          },
        ],
        colors: ['black', 'blue', 'green', 'purple'],
      },
      isCartHidden: true,
      cart: [],
      currentOption: 0,
      currentColor: 0,
    };
  },
  methods: {
    changeCartPage() {
      console.log('ho cliccato su totale');
      this.isCartHidden = !this.isCartHidden;
    },
    changeColor(index) {
      console.log('cambio colore');
      console.log(index);
      this.currentColor = index;
    },
    calculateName() {
      // return  product.name }} {{ product.colors[currentColor] }} {{
      //       product.options[currentOption].text }}

      return `${this.product.name} ${this.product.colors[this.currentColor]} ${
        this.product.options[this.currentOption].text
      }`;
    },
    calculatePrice() {
      return (
        this.product.price + this.product.options[this.currentOption].plus
      ).toFixed(2);
    },
    addToCart() {
      console.log('aggiungo al carrello');

      const objCart = {
        name: this.calculateName(),
        quantity: 1,
        price: this.calculatePrice(),
      };

      this.cart.push(objCart);

      /*
      {
        name: 'nome prodotto calcolato',
        quantity: 1
        price: 'prezzo singolo prodotto'
      }

      this.cart.push(obj);


      */
    },
  },
}).mount('#app');
