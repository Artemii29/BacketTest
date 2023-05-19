<template>
  <div class="breadcrumbs">
    <div :key="idx" v-for="(link, idx) in links">
      <a href="#" class="breadcrumbs__breadcrumb">{{ link }}</a>
      <img
          v-if="idx !== links.length - 1"
          src="/img/arrow_right.svg"
          alt="breadcrumb icon"
          class="breadcrumbs__icon"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs",
  data() {
    return {
      links: ['Главная', 'Корзина']
    }
  },
}
</script>

<style scoped>
.breadcrumbs {
  display: flex;
}
.breadcrumbs__breadcrumb {
  margin-right: 16px;
  color: #33374E;
  text-decoration: none;
}
.breadcrumbs__icon {
  margin-right: 16px;
}
</style>