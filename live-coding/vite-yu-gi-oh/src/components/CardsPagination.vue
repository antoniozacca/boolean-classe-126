<script>
import { store } from '../store';

export default {
  name: 'CardsPagination',
  emits: ['search'],
  data() {
    return {
      store,
    };
  },
  methods: {
    prev() {
      console.log('pagina precedente');
      this.store.apiInfo.offsetNumber -= this.store.apiInfo.resultNumber;
      this.$emit('search');
    },
    next() {
      console.log('pagina successiva');
      this.store.apiInfo.offsetNumber += this.store.apiInfo.resultNumber;
      this.$emit('search');
    },
  },
};
</script>

<template>
  <nav>
    <ul>
      <li @click="prev">Prev</li>
      <li @click="next">Next</li>
    </ul>
  </nav>
</template>
