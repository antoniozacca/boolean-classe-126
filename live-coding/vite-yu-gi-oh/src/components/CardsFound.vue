<script>
import { store } from '../store';

export default {
  name: 'CardsFound',
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="alert alert-info" role="alert">
    {{ store.meta.total_rows }} Risultati trovati
  </div>
</template>
