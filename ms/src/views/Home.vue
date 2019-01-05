<template>
	<div class="home">
		<navs></navs>
		<img class="animated" src="../../../Mine/img/banner1.jpg" />
		<demos>我的作品</demos>
		<works></works>
		
		<div class="crx"></div>
		<router-view/>
	</div>
</template>

<script>
	import Navs from '../components/Navs.vue'
	import Demos from '../components/Demos.vue'
	import Works from '../mines/Works.vue'

	export default {
		data() {
			return {};
		},
		components: {
			Navs,
			Demos,
			Works

		},
	}
</script>

<style>
	.home {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	
	.home img {
		margin-top: 40px;
		width: 100%;
		height: auto;
		box-sizing: border-box;
	}
	
	.home img:hover {
		-webkit-animation-name: pulse;
		animation-name: pulse;
	}
	.crx{
		height: 400px;
	}
</style>