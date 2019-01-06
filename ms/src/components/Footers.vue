<template>
	<div class="footers">
		<div class="box">
			<div class="item">
				<div class="title">手机：</div>
				<span>15002147217</span>
			</div>
			<div class="item">
				<div class="title">微信：</div>
				<span>Abel90crx</span>
			</div>
			<div class="item">
				<div class="title">QQ：</div>
				<span>1038906357</span>
			</div>
		</div>
		<div class="box">
			<div class="item">
				<div class="title">E-mail：</div>
				<span>hengmeilengshu1314@qq.com</span>
			</div>
			<div class="item">
				<div class="title">版权：</div>
				<span>2019.01.06&nbsp;&nbsp;©陈融炫</span>
			</div>
			<div class="item">
				<router-link class="title" to="">more</router-link>
			</div>
		</div>
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
	
	.footers{
		width: 100%;
		height: 100px;
		line-height: 40px;
		margin-top: 40px;
		background-color: #252B44;
	}
	.footers .box{
		display: flex;
		display: -webkit-flex;
		color: #fff;
		text-align: center;
		font-size: 14px;
		padding-top: 5px;
	}
	.footers .box .item{
		flex: 1;
	}
	.footers .box .item .title{
		display: inline-block;
	}
	
	.footers .box .item a{
		cursor: pointer;
		font-size: 14px;
		color: #fff;
		text-decoration: none;
	}
</style>