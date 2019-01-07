<template>
	<div class="introductions">
		<div class="aside">
			<asides></asides>
		</div>
		<div class="content">
			<fei-fan></fei-fan>
		</div>
		</router-view>
	</div>
</template>

<script>
	import Asides from '../components/Asides.vue'
	import FeiFan from '../introductions/FeiFan.vue';
	
	
	export default{
		data(){
			return{};
		},components: {
			Asides,
			FeiFan

		},
	}
</script>

<style>
	.introductions{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
	}
	.clear:after{
		display: block;
		content: "";
		clear: both;
	}
	.introductions .aside{
		box-sizing: border-box;
		width: 100px;
		height: 80%;
		position: fixed;
		float: left;
		z-index: 9999;
		background-color: rgba(155,155,155,0.6);
	}
	.introductions .content{
		height: 100%;
		box-sizing: border-box;
		/*background-color: skyblue;*/
	}
</style>