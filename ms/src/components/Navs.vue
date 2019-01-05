<template>
	<div class="navs">
			<div class="show">你好，欢迎光临陈融炫的个人页！</div>
			<div class="click" v-for="(item,index) in nav">
				<router-link :to='item.to' :class='{active:isActive}'>
					<i class="fa" :class="item.fa"></i>
					<span v-text="item.title"></span>
				</router-link>
			</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				 isActive: true,
				nav:[{
					id:5,
					to:'',
					fa:'fa-phone',
					title:'联系'
				},{
					id:4,
					to:'',
					fa:'fa-clone',
					title:'关于'
				},{
					id:3,
					to:'',
					fa:'fa-line-chart',
					title:'经历'
				},{
					id:2,
					to:'',
					fa:'fa-diamond',
					title:'作品'
				},{
					id:1,
					to:'',
					fa:'fa-home',
					title:'首页'
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
		background-color: #000;
		line-height: 60px;
		color: #fff;
		box-sizing: border-box;
	}
	.navs .show{
		float: left;
		margin-left: 6%;
		box-sizing: border-box;
	}
	.navs .show p{}
	
	.navs .click{
		float: right;
		margin-right: 6%;
		box-sizing: border-box;
	}
	.navs .click a{
		text-decoration: none;
		color: #fff;
		margin-left: 20px;
	}
	.isActive{
		color: #DE898B;
	}
	
	.navs .click a i.fa{
		margin-right: 8px;
	}
</style>