<template>
  <div class="cart">
    <div class="cart__breadcrumbs">
      <BreadCrumbs/>
    </div>
    <div class="cart__body">
      <div class="cart__basket-container">
        <Basket/>
      </div>
      <div class="cart__order-info-container">
        <OrderInfo/>
      </div>
    </div>
    <slider-carousel/>
  </div>
</template>

<script>
import Basket from "@/components/OrderItems";
import OrderInfo from "@/components/OrderInfo";
import BreadCrumbs from "@/components/BreadCrumbs";
import SliderCarousel from "@/components/SliderCarousel";

export default {
  name: "CartPage",
  components: {
    SliderCarousel,
    BreadCrumbs,
    Basket, OrderInfo
  }
}
</script>

<style scoped>
.cart__breadcrumbs {
  margin-bottom: 24px;
}

.cart__body {
  display: flex;
  justify-content: space-between;
}

.cart__basket-container {
  margin-right: 55px;
}

.cart__order-info-container {
  display: flex;
  align-items: center;
}
</style>