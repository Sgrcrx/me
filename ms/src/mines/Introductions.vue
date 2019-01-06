<template>
	<div class="introductions">
		<div class="aside">
			
		</div>
		<div class="content">
			
		</div>
		</router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return{};
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
		background-color: salmon;
	}
	.introductions .content{
		width: 92.6%;
		height: 100px;
		padding: 0px 100px;
		box-sizing: border-box;
		margin: 0px 100px;
		background-color: skyblue;
	}
</style>