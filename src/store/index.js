import {createStore} from 'vuex'

export default createStore({
  state: {
    cards: [
      {
        id: 1,
        name: "Вытяжное устройство G2H",
        description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        article: "Артикул: G2H1065",
        img: '/img/product1.png',
        price: '12644 ₽',
        count: 1
      },
      {
        id: 2,
        name: "Вытяжное устройство G2H",
        description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        article: "Артикул: G2H1065",
        img: '/img/product2.png',
        price: '12644 ₽',
        count: 1
      },
      {
        id: 3,
        name: "Вытяжное устройство G2H",
        description: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        article: "Артикул: G2H1065",
        img: '/img/product3.png',
        price: '12644 ₽',
        count: 1
      }
    ],

  },
  getters: {
    totalPrice(state){
      let total = 0;

      for (let item of state.cards) {
        console.log(item.price)
        let sum = parseFloat(item.price)* item.count
        total += sum;
      }

      return total
    },
    counter(state){
      let quantity = 0;
      for (let item of state.cards) {
        quantity += item.count
      }
      return quantity
    }

  },
  mutations: {
    increment(state,object) {
     let result = state.cards.find(item => item.id === object.id)
      console.log(result)
          result.count++
    },
    decrement(state,id){
      let result = state.cards.find(item => item.id === id,
          console.log(id))
      console.log(result)
      if (result.count>1) {
        result.count--
      }

    },
    cartdelete(state){
      state.cards = []
    },
    deleteproduct(state,id){
      console.log(id)
      let result = state.cards.indexOf(id)
      console.log(result)
      state.cards.splice(result,1)
  }
  },
  actions: {
  },
  modules: {
  }
})
