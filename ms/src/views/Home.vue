<template>
	<div class="home">
		<navs></navs>
		<img class="animated" src="../../public/img/banner1.jpg" />
		<demos>我的作品</demos>
		<works></works>
		<works1></works1>
		<demos>我的技能</demos>
		<skill></skill>
		
		<div class="crx"></div>
		<router-view/>
	</div>
</template>

<script>
	import Navs from '../components/Navs.vue'
	import Demos from '../components/Demos.vue'
	import Works from '../mines/Works.vue'
	import Works1 from '../mines/Works1.vue'
	import Skill from '../mines/Skill.vue'

	export default {
		data() {
			return {};
		},
		components: {
			Navs,
			Demos,
			Works,
			Works1,
			Skill

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