<script>
export default {
  name: 'Header',
  data() {
    return {
      intestazione: 'Sono intestazione da componente',
    };
  },
};
</script>
<template>
  <header>
    <h2>{{ intestazione }}</h2>
  </header>
</template>

<style scoped>
h2 {
  color: red;
}
</style>
