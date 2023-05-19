<template>
  <div class="order-items">
    <div class="order-items__header">
      <h2 class="order-items__title">Ваша корзина</h2>
      <div class="order-items__item-count">{{this.$store.getters.counter}} товара</div>
      <button @click="this.$store.commit('cartdelete')" class="order-items__clear-cart">Очистить корзину</button>
    </div>
    <div v-for="card in this.$store.state.cards" :key="card.id" class="order-items__body">
      <div  class="order-items__item">
        <img class="order-items__item-img" src="/img/product1.png" alt="cart product">
        <div class="order-items__item-info">
          <h4 class="item-info__item-header">{{card.name}}</h4>
          <div class="item-info__description">
            12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия
          </div>
          <div class="item-info__articul">
            Артикул: G2H1065
          </div>
        </div>
        <div class="order-items__button-block">
          <button @click="this.$store.commit('decrement',card.id)" class="button-block__button">
            <img src="/img/minus_sign.svg" alt="subtract item">
          </button>
          <button class="button-block__button">{{card.count}}</button>
          <button @click="this.$store.commit('increment',card)" class="button-block__button">
            <img src="/img/plus_sign.svg" alt="add item">
          </button>
          <button @click="this.$store.commit('deleteproduct',card)">X</button>
        </div>
      </div>
    </div>
    <div class="bottom">
      <input type="checkbox" id="install">
      <div class="bottom__image">
      <img src="img/install.png" alt="" width="40px" height="40px">
    </div>
      <div class="alert__input">
        <label for="install">Установка</label>
        <p>Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderItems",
  data() {

  }
}
</script>

<style>
.order-items {
  display: flex;
  flex-direction: column;
}

.order-items__header {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 24px;
}

.order-items__title {
  font-size: 44px;
  line-height: 40px;
  color: #1F2432;
  margin: 0 22px 0 0;
}

.order-items__item-count {
  font-size: 18px;
  color: #797B86;
}

.order-items__clear-cart {
  color: #797B86;
  margin-left: auto;
  font-size: 14px;

}

.order-items__body {
  display: flex;
  flex-direction: row;
}

.order-items__item {
  display: flex;
  justify-content: space-between;
  min-width: 800px;
}

.order-items__item-img {
  width: 100px;
  height: 100px;
}

.order-items__item-info {
  display: flex;
  flex-direction: column;
  max-width: 263px;
}

.item-info__item-header {
  margin: 0 0 16px 0;
}

.item-info__description {
  font-size: 12px;
  color: #2C3242;
  margin-bottom: 16px;
}

.item-info__articul {
  color: #797B86;
}

.order-items__button-block {
  display: flex;
  align-items: center;
}

.button-block__button {
  width: 38px;
  height: 34px;
  border: none;
  margin-right: 2px;
  background: #F6F8FA;
}

.bottom {
  display: flex;
  flex-direction: row;
  margin-top: 45px;

  padding-left: 30px;
}
.bottom__image{
  margin-left: 20px;
  margin-right: 30px;
}

.alert__input {
  display: flex;
  flex-direction: column;
  background-color: #F6F8FA;
  height: 102px;
  width: 100%;
}

</style>