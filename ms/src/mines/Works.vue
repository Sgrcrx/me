<template>
	<div class="works">
		<div class="item">
			<div class="its" v-for="(item,index) in images">
				<img :src="item.image" class="animated" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				images: [{
					image: require('../../public/img/1.jpg'),
				}, {
					image: require('../../public/img/2.jpg'),
				}, {
					image: require('../../public/img/3.jpg'),
				}, {
					image: require('../../public/img/4.jpg'),
				}]

			};
		},
	}
</script>

<style>
	.works {
		width: 100%;
		background-color: #fff;
		padding-bottom: 20px;
		margin-top: 40px;
	}
	
	.works .item {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
	}
	
	.works .item .its {
		flex: 1;
		-webkit-flex: 1;
		box-sizing: border-box;
		width: 100%;
		padding: 0px 10px;
	}
	
	.works .item img {
		box-sizing: border-box;
		width: 100%;
	}
	
	.works .item img:hover{
		-webkit-animation-name: swing;
		animation-name: swing;
	}
</style>