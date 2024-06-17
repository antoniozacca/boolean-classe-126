<script>
import CardElement from './CardElement.vue';
import { store } from '../store';
export default {
  name: 'CardsList',
  components: {
    CardElement,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="row">
    <div class="col-12 col-md-4 col-lg-3" v-for="card in store.data">
      <CardElement
        :image="card.card_images[0].image_url_small"
        :name="card.name"
        :type="card.archetype"
      />
    </div>
  </div>
</template>
