<script>
import CardsFound from './CardsFound.vue';
import CardsList from './CardsList.vue';
import { store } from '../store';
import axios from 'axios';

export default {
  name: 'MainComponent',
  components: {
    CardsFound,
    CardsList,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    searchCards() {
      axios
        .get(this.store.apiInfo.url + this.store.apiInfo.endpoints.cards, {
          params: {
            num: this.store.apiInfo.resultNumber,
            offset: this.store.apiInfo.offsetNumber,
          },
        })
        .then((response) => {
          this.store.data = response.data.data;
          this.store.meta = response.data.meta;

          // console.log(response.data);
          // console.log(this.store.results);
        });
    },
  },
  created() {
    console.log('chiama api di yu-gi-oh');
    this.searchCards();
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div>ricerca</div>
      <CardsFound />
      <CardsList />
    </div>
  </main>
</template>
