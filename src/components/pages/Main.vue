<template>
	<div>
		<swiper class="mb-4" style="height: 500px;" :options="swiperOption">
	        <swiper-slide class="bg-cover" :style="slide1">
	        	<div class="w-25"></div>
	        	<div class="w-75 h-100 d-flex flex-column justify-content-center align-items-center">
	        		<h2>阿卡講慶開幕</h2>
	        		<p>自10/1 起 至 11/31日止全館8折起<br>
	        			在送7折優惠卷<small>每人限領取一次</small></p>
	        		<button class="btn btn-info w-25">點我領取</button>
	        	</div>
	        </swiper-slide>
	        <swiper-slide class="bg-cover" :style="slide2">
	        	
	        </swiper-slide>
	        <div class="swiper-pagination" slot="pagination"></div>
	  	</swiper>
		
	  	<router-link class="btn btn-primary rel" to="shoppingcart"><i class="fas fa-shopping-cart"></i></router-link>

		<div class="container">
			<div class="row">
				<div class="col-md bg-cover" :style="mainPhone">
					<div class="text-center">
						<h3 class="display-4">手機</h3>
						<router-link class="btn btn-outline-primary " to="">More</router-link>
					</div>
				</div>
				<div class="col-md bg-cover d-flex justify-content-center" :style="mainAccessories">
					<p class="text-center">配件</p>
				</div>
			</div>
			
		</div>

	</div>	
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default{
		data(){
			return{
				swiperOption: {
				 	pagination: {
			            el: '.swiper-pagination',
			            dynamicBullets: true,
			        }
				 },
				 slide1: {
				 	backgroundImage: `url( ${require('@/assets/image/gift-i.jpg')} )`,
				 },
				 slide2: {
				 	backgroundImage: `url( ${require('@/assets/image/gift-i.jpg')} )`,
				 },
				 mainPhone: {
				 	backgroundImage: `url( ${require('@/assets/image/phone-main.jpg')} )`,
				 	height: '300px',
				 	width: '300px',
				 	padding: '0px',
				 },
				 mainAccessories: {
				 	backgroundImage: `url( ${require('@/assets/image/Accessories-main.jpg')} )`,
				 	height: '300px',
				 	width: '300px',
				 }
			};
		},
		components: {
			swiper,
    		swiperSlide,
		},
	};
</script>


<style>
	.swiper-container {
	      width: 100%;
	      height: 100%;
	 }
    .swiper-slide {
      text-align: center;
      font-size: 36px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .bg-cover{
    	background-position: center center;
    	background-size: cover;
    	background-repeat: no-repeat;
    }
    .bg-top{
    	background-position: center top;
    	background-size: cover;
    	background-repeat: no-repeat;
    }
    small{
    	font-size: 1rem;
    }
    .rel{
		position: absolute;
		bottom: 80px;
		right: 50px;
		z-index: 100;
	}
	.mainphone {
		background-color: rgba(0,0,0,0.5);
	}
</style>