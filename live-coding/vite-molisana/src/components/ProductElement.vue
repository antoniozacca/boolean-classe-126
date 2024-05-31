<script>
export default {
  name: 'ProductElement',
  // props: ['image', 'title'],
  props: {
    image: String,
    title: String,
  },
};
</script>

<template>
  <div class="product">
    <img :src="image" :alt="title" />
    <h3>{{ title }}</h3>
  </div>
</template>
