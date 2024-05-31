<script>
import products from '../data/la-molisana.json';
import ProductElement from './ProductElement.vue';
export default {
  name: 'ProductsList',
  components: {
    ProductElement,
  },
  data() {
    return {
      products,
    };
  },
};
</script>

<template>
  <section>
    <div class="container-default">
      <div class="products">
        <ProductElement
          v-for="(product, index) in products"
          :key="index"
          :image="product.src"
          :title="product.titolo"
        />
        <!-- <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement /> -->

        <!-- <div class="product">
          <div class="image">image</div>
          <h3>title</h3>
        </div>
        <div class="product">
          <div class="image">image</div>
          <h3>title</h3>
        </div>
        <div class="product">
          <div class="image">image</div>
          <h3>title</h3>
        </div>
        <div class="product">
          <div class="image">image</div>
          <h3>title</h3>
        </div>
        <div class="product">
          <div class="image">image</div>
          <h3>title</h3>
        </div>
        <div class="product">
          <div class="image">image</div>
          <h3>title</h3>
        </div>
        <div class="product">
          <div class="image">image</div>
          <h3>title</h3>
        </div>
        <div class="product">
          <div class="image">image</div>
          <h3>title</h3>
        </div>
        <div class="product">
          <div class="image">image</div>
          <h3>title</h3>
        </div>
        <div class="product">
          <div class="image">image</div>
          <h3>title</h3>
        </div>
        <div class="product">
          <div class="image">image</div>
          <h3>title</h3>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

section {
  padding: 50px 0;

  background-color: green;
  background-image: url('../assets/images/background-magico.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  .products {
    display: flex;
    flex-wrap: wrap;

    .product {
      width: calc(100% / 4);
      background-color: #ffffff;
      border: 2px solid $main-color;
      padding: 20px 30px;
      text-align: center;

      :deep(h3) {
        color: $product-text-color;
      }
    }
  }
}
</style>
