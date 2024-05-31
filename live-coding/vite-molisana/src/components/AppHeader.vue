<script>
import AppLogo from './AppLogo.vue';
import HeaderMenu from './HeaderMenu.vue';
export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    HeaderMenu,
  },
};
</script>

<template>
  <header>
    <div class="container-default">
      <AppLogo />
      <HeaderMenu />
    </div>
  </header>
</template>

<style scoped>
.container-default {
  text-align: center;
}
</style>
