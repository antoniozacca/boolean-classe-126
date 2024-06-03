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
  created() {
    console.log('chiama api di yu-gi-oh');

    axios.get(this.store.apiUrl).then((response) => {
      this.store.data = response.data.data;
      this.store.meta = response.data.meta;

      // console.log(response.data);
      // console.log(this.store.results);
    });
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
