<template>
  <div class="container">
    <Cart/>
  </div>
</template>

<script>
import Cart from "@/pages/CartPage";

export default {
  name: 'App',
  components: {
    Cart,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 64px 80px;
}

.right {
  margin-left: 125px;
}

</style>
