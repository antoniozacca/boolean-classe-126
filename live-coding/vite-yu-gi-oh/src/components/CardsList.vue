<script>
import { store } from '../store';
export default {
  name: 'CardsList',
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div>
    <ul class="list-unstyled">
      <li v-for="card in store.data">{{ card.name }}</li>
    </ul>
  </div>
</template>
