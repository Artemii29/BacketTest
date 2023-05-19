<template>
  <h1 class="menu__name__goods">Просмотренные товары</h1>
  <swiper
      :modules="modules"
      :slides-per-view="4"
      :space-between="50"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      id="mySlider"
  >
    <swiper-slide class="card">
      <img src="img/product1.png" alt="">
      <h1>BXC</h1>
      <h6>Вытяжное устройство для механической системы вентиляции</h6>
      <h5>6 848 ₽ – 56 584 ₽ </h5>
      <h5>77.60 € – 643.86 €</h5>
      <button class="card__button">Подробнее</button>
    </swiper-slide>
    <swiper-slide class="card"> <img src="img/product1.png" alt="">
      <h1>BXC</h1>
      <h6>Вытяжное устройство для механической системы вентиляции</h6>
      <h5>6 848 ₽ – 56 584 ₽ </h5>
      <h5>77.60 € – 643.86 €</h5>
      <button class="card__button">Подробнее</button></swiper-slide>
    <swiper-slide class="card"> <img src="img/product1.png" alt="">
      <h1>BXC</h1>
      <h6>Вытяжное устройство для механической системы вентиляции</h6>
      <h5>6 848 ₽ – 56 584 ₽ </h5>
      <h5>77.60 € – 643.86 €</h5>
      <button class="card__button">Подробнее</button></swiper-slide>
    <swiper-slide class="card"> <img src="img/product1.png" alt="">
      <h1>BXC</h1>
      <h6>Вытяжное устройство для механической системы вентиляции</h6>
      <h5>6 848 ₽ – 56 584 ₽ </h5>
      <h5>77.60 € – 643.86 €</h5>
      <button class="card__button">Подробнее</button></swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Navigation} from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiper = useSwiper();
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };


    return {
      onSwiper,
      onSlideChange,
      swiper,
      modules:[Navigation]
    };
  },
  mounted() {
    let Swiper = this.Swiper;
    new Swiper(".swiper-container", {
      navigation: {
        nextEL:".swiper-button-next"
      }
    });
  }
};
</script>
<style >
 .card{
   background-color:#F6F8FA ;
   height: 563px;
   width: 305px;
   padding: 25px;
 }
 .card__button{
  background-color: #0069B4;
   color: #FFFFFF;
   width: 80%;
   height: 52px;
   outline: 0 ;
   border: none;
   margin: auto;
   display: block;
 }
 .menu__name__goods{
   font-size: 30px;
   font-weight: 600;
 }

 .swiper-button-next{
   background-color: #90A2B5;
   height: 30px;
   width: 30px;
  display: block;
   border-radius: 50%;
 }
 .swiper-button-next::after{
   color: #FFFFFF;
   font-size: 16px;
   display: block;
  justify-content: center;
   text-align: center;
   content: "";
   }
 .swiper-button-prev{
   background-color: #90A2B5;
   height: 30px;
   width: 30px;
   display: block;
   border-radius: 50%;
 }
 .swiper-button-prev::after{
   color: #FFFFFF;
   font-size: 16px;
   display: block;
   justify-content: center;
   text-align: center;
   content: "";
 }
</style>