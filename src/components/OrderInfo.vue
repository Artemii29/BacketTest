<template>
  <div class="head_right">
    <h1 class="total">Итого</h1>
    <div class="head_container">
      <h3>Сумма заказа {{ this.$store.getters.totalPrice }}р</h3>
      <h3>Количество {{this.$store.getters.counter}}</h3>
      <h3>Установка</h3>
    </div>
    <h2>Стоимость товаров</h2>
    <button class="btnbtnbtn">Оформить заказ</button>
    <button class="btnbtn2">Купить в один клик</button>
  </div>
</template>

<script>
export default {
  name: "rightBar",
  data() {
  }
}
</script>

<style scoped>
.head_right {
  display: flex;
  flex-direction: column;
}

.head_container {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #AEB0B6;
}

.btnbtnbtn {
  background-color: #0069B4;
  width: 365px;
  height: 54px;
  color: white;
  outline: 0 !important;
  border: none;
}

.btnbtn2 {
  color: #0069B4;
  background-color: #FFFFFF;
  width: 365px;
  height: 54px;
  border: 1px solid #0069B4;
  margin-top: 10px;
}

.total {
  font-family: Lato;
  font-size: 24px;
}
</style>