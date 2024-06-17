<script>
import axios from 'axios';
import { store } from '../store';
export default {
  name: 'CardsSearch',
  emits: ['search'],
  data() {
    return {
      store,
    };
  },
  methods: {
    getArchetypes() {
      axios
        .get(this.store.apiInfo.url + this.store.apiInfo.endpoints.archetypes)
        .then((response) => {
          console.log(response);
          this.store.archetypes = response.data;
        });
    },
    search() {
      console.log('sto facendo la ricerca');
    },
  },
  created() {
    this.getArchetypes();
  },
};
</script>

<template>
  <div class="mb-3">
    <select
      class="form-select"
      @change="$emit('search')"
      v-model="store.searchKey"
    >
      <option selected value="">Seleziona archetipo</option>
      <option v-for="(archetype, id) in store.archetypes" :key="id">
        {{ archetype.archetype_name }}
      </option>
    </select>
  </div>
</template>
