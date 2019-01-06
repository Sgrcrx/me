<template>

	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in images">
				<router-link :to="item.to">
					<img :src="item.image">
				</router-link>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		data: function() {
			return {
				images: [{
					id: 1,
					to: '',
					image: require('../../public/img/7.jpg')
				}, {
					id: 2,
					to: '',
					image: require('../../public/img/8.png')
				}, {
					id: 3,
					to: '',
					image: require('../../public/img/9.jpg')
				}, {
					id: 4,
					to: '',
					image: require('../../public/img/10.png')
				}, {
					id: 5,
					to: '',
					image: require('../../public/img/11.png')
				}]
			};
		},
		methods: {},
		created() {},
		mounted() {
			console.log("初始化轮播图！");
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				loop:true,
				autoplay: true
			});

		}
	}
</script>

<style>
	/*轮播图*/
	
	.swiper-container {
		width: 100%;
		margin: 0px auto;
		text-align: center;
		/*background-color: #fff;*/
	}
	
	.swiper-container a {
		display: block;
		margin: 0px auto;
		width: 100%;
	}
	
	.swiper-container a img {
		width: auto;
		height: 300px;
	}
	
	.swiper-pagination {
		text-align: center;
		margin: 0px auto;
		width: 100%;
		margin-bottom: 30px;
	}
</style>