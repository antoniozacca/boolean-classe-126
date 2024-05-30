<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'MyApp',
  data() {
    return {
      title: 'Sono la mia prima app con componenti',
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<template>
  <HeaderComponent />

  <main>
    <h2>{{ title }}</h2>
  </main>

  <FooterComponent />
</template>
