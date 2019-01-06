<template>
	<div class="home">
		<navs></navs>
		<img class="animated infinite w" src="../../public/img/banner.png" />
		<demos>我的信息</demos>
		<informations></informations>
		<introductions></introductions>
		<demos class='item1'>我的证书</demos>
		<certificate></certificate>
		<footers></footers>
		<div class="crx"></div>
		<router-view/>
	</div>
</template>

<script>
	import Navs from '../components/Navs.vue'
	import Footers from '../components/Footers.vue'
	import Demos from '../components/Demos.vue'
	import Informations from '../mines/Informations.vue'
	import Introductions from '../mines/Introductions.vue'
	import Certificate from '../mines/Certificate.vue'


	export default {
		data() {
			return {};
		},
		components: {
			Navs,
			Footers,
			Demos,
			Informations,
			Introductions,
			Certificate
		},
	}
</script>

<style>
	.home {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	
	.home .w {
		margin-top: 100px;
		width: 100%;
		height: auto;
		box-sizing: border-box;
	}
	
	.home img{
		margin-top: 40px;
		width: 100%;
		height: auto;
		box-sizing: border-box;
	}
	.item1 {
		background-color: #fff;
		color: #000;
	}
	.home img:hover {
		-webkit-animation-name: pulse;
		animation-name: pulse;
	}
	
	
	

</style>