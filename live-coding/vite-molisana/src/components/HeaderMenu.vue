<script>
export default {
  name: 'HeaderMenu',
};
</script>

<template>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#" class="active">Prodotti</a></li>
      <li><a href="#">Chi siamo</a></li>
      <li><a href="#">Contatti</a></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

nav {
  padding: 20px 0;

  ul {
    display: flex;
    justify-content: center;

    a {
      display: inline-block;
      padding: 20px 15px;
      color: $text-color;

      &.active {
        background-color: $main-color;
      }
    }
  }
}
</style>
