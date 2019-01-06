<template>
	<div class="production">
		<navs></navs>
		<div class="images">
			<img class="animated infinite w" src="../../public/img/fly.jpg" />
		</div>
		<demos class=''>我的<span class="red">海报</span>作品</demos>
		<works></works>
		<demos class='item1'>我的<span class="red">网页</span>设计</demos>
		<div class="images">
			<img class="item2 animated infinite" src="../../public/img/zanlis.jpg" />
			<demos class=''>我的<span class="red">美术</span>作品</demos>
		<works1></works1>
			<demos class='item1'>我的<span class="red">轮播图</span>作品</demos>
		<works2></works2>
		</div>
		<demos class=''>我的<span class="red">手机界面</span>作品</demos>
		<div class="images">
			<img class="sgr" src="../../public/img/6.jpg" />
		</div>
		<demos class='item1'>我的<span class="red">图标</span>作品</demos>
		<div class="images">
			<img class="sgr" src="../../public/img/5.jpg" />
		</div>
		
		<div class="says">到此结束，感谢你的欣赏！</div>
		
		<footers></footers>
		<div class="crx"></div>
		<router-view/>
	</div>
</template>

<script>
	import Navs from '../components/Navs.vue'
	import Demos from '../components/Demos.vue'
	import Footers from '../components/Footers.vue'
	import Works from '../mines/Works.vue'
	import Works1 from '../mines/Works1.vue'
	import Works2 from '../mines/Works2.vue'
	export default {
		data() {
			return {};
		},
		components: {
			Navs,
			Works,
			Works1,
			Works2,
			Demos,
			Footers,

		},
	}
</script>

<style>
	.production {
		margin: 0px auto;
	}
	
	.production .item1 {
		background-color: #fff;
		color: #000;
	}
	
	.production .images .w {
		margin-top: 100px;
		width: 100%;
		height: auto;
		box-sizing: border-box;
	}
	
	.production .images img {
		margin-top: 40px;
		width: 100%;
		height: auto;
		box-sizing: border-box;
	}
	
	.production .images img:hover {
		-webkit-animation-name: pulse;
		animation-name: pulse;
	}
	
	img.item2 {
		box-sizing: border-box;
	}
	
	.says{
		text-align: center;
		font-size: 20px;
		line-height: 20px;
		color: #CCCCCC;
		margin-top: 40px;
		font-family: "方正楷体简体";
	}
</style>