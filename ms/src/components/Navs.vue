<template>
	<div class="navs">
			<div class="show">你好，欢迎光临陈融炫的个人页！</div>
			<div class="click" v-for="(item,index) in nav">
				<router-link :to='item.to' :class='{active:isActive}'>
					<i class="fa" :class="item.fa"></i>
					<span v-text="item.title"></span>
				</router-link>
			</div>
			<div class="phone">
				<i class="fa fa-phone"></i>
				<span>15002147217</span>
			</div>
			
	</div>
</template>

<script>
	export default{
		data(){
			return{
				 isActive: true,
				nav:[{
					id:1,
					to:'/',
					fa:'fa-home',
					title:'首页'
				},{
					id:2,
					to:'production',
					fa:'fa-diamond',
					title:'作品'
				},{
					id:3,
					to:'Experience',
					fa:'fa-line-chart',
					title:'相关站点'
				},{
					id:4,
					to:'About',
					fa:'fa-clone',
					title:'关于'
				},]
			};
		},
		created(){},
		methods:{},
	}
</script>

<style>
	
	.navs{
		width: 100%;
		height: 60px;
		display: block;
		content: '';
		clear: both;
		background-color: #252B44;
		line-height: 60px;
		color: #fff;
		position: relative;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 9999;
		box-sizing: border-box;
	}
	.navs .show{
		float: left;
		margin-left: 6%;
		margin-right: 120px;
		box-sizing: border-box;
	}
	.navs .show p{}
	
	.navs .click{
		float: left;
		margin-right: 6%;
		box-sizing: border-box;
	}
	.navs .click a{
		text-decoration: none;
		color: #fff;
		margin-left: 20px;
	}
	.navs .click a.router-link-exact-active {
		color: #FE3A5E;
	}
	
	.navs .click a i.fa{
		margin-right: 8px;
	}
	

	.navs .phone{
		position: absolute;
		top: 0px;
		right: 6%;
	}
	.navs .phone i{
		margin-right: 8px;
	}
	.navs .phone span{}
	
</style>