<script>
export default {
  name: 'CardElement',
  props: ['image', 'name', 'type'],
};
</script>

<template>
  <div class="card">
    <img :src="image" class="card-img-top" :alt="name" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
        {{ type }}
      </p>
    </div>
  </div>
</template>
