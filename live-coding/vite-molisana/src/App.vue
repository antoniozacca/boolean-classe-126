<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ProductsList from './components/ProductsList.vue';
export default {
  name: 'Molisana',
  components: {
    AppHeader,
    AppFooter,
    ProductsList,
  },
};
</script>

<template>
  <AppHeader />
  <!-- <AppHeader></AppHeader>
  <app-header />
  <app-header></app-header> -->
  <main>
    <ProductsList />
  </main>
  <AppFooter />
</template>
