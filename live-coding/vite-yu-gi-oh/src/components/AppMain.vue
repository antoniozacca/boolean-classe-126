<script>
import CardsFound from './CardsFound.vue';
import CardsList from './CardsList.vue';
import CardsSearch from './CardsSearch.vue';
import CardsPagination from './CardsPagination.vue';

import { store } from '../store';
import axios from 'axios';

export default {
  name: 'MainComponent',
  components: {
    CardsFound,
    CardsList,
    CardsSearch,
    CardsPagination,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    qualcosa() {
      console.log('sto rispondendo alla chiamata del figlio');
    },
    searchCards() {
      this.store.loading = true;

      //https://db.ygoprodeck.com/api/v7/ => this.store.apiInfo.url
      //cardinfo.php?num=10&offset=0 => this.store.apiInfo.endpoints.cards
      //https://db.ygoprodeck.com/api/v7/cardinfo.php
      //num=10
      //&offset=0
      //&archetype=Alien

      const params = {
        num: this.store.apiInfo.resultNumber,
        offset: this.store.apiInfo.offsetNumber,
      };

      /*
      {
        num: 10,
        offset: 0
      }


      */

      if (this.store.searchKey) {
        params.archetype = this.store.searchKey;
        /*
        {
          num: 10,
          offset: 0,
          archetype: Alien
        }

*/
      }

      axios
        .get(this.store.apiInfo.url + this.store.apiInfo.endpoints.cards, {
          params,
        })
        .then((response) => {
          console.log(response);

          const { data, meta } = response.data;

          this.store.data = data;
          this.store.meta = meta;

          this.store.loading = false;

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
      <CardsSearch @search="searchCards" />
      <div v-if="store.loading">Caricamento in corso....</div>
      <div v-else>
        <CardsFound class="py-3" />
        <CardsList />
        <CardsPagination @search="searchCards" />
      </div>
    </div>
  </main>
</template>
