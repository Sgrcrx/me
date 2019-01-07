<template>
	<div class="asides">
		<div class="box">
			<div class="item" v-for="(item,index) in links">
				<router-link :to="item.to" v-text="item.title"></router-link>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				links:[{
					id:1,
					to:'/asides',
					title:'非凡学院A'
				},{
					id:2,
					to:'a',
					title:'非凡学院b'
				},{
					id:3,
					to:'d',
					title:'非凡学院x'
				},]
			};
		},
	}
</script>

<style>
	.asides{
		width: 100%;
		height: 100%;
	}
	.asides .box{}
	.asides .box .item{
		text-align: center;
		box-sizing: border-box;
	}
	.asides .box .item a{
		line-height: 40px;
		color: #fff;
		font-size: 16px;
		text-decoration: none;
	}
	
	.asides .box .item a.router-link-exact-active{
		color: #FE3A5E;
		padding: 10px 12px;
		box-sizing: border-box;
	}
</style>