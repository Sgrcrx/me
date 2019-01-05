<template>
	<div class="demos">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		data(){
			return{};
		}
	}
</script>

<style>
	.demos{
		width: 100%;
		height: 60px;
		text-align: center;
		line-height: 60px;
		background-color: #000;
		margin-top: 40px;
		color: #fff;
	}
</style>