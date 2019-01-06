<template>
	<div class="certificate">
		<div class="box">
			<div class="item" v-for="(item,index) in books">
				<img class="animated" :src="item.images"/>
			</div>
			
		</div>
		<div class="box">
			<div class="item" v-for="(title,j) in books1">
				<img class="animated" :src="title.images"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				books:[{
					id:1,
					images:require('../../public/img/w1.jpg')
				},{
					id:2,
					images:require('../../public/img/w2.jpg')
				},{
					id:3,
					images:require('../../public/img/w3.jpg')
				},{
					id:4,
					images:require('../../public/img/w4.jpg')
				},{
					id:5,
					images:require('../../public/img/w5.jpg')
				}],
				books1:[{
					id:6,
					images:require('../../public/img/w6.jpg')
				},{
					id:7,
					images:require('../../public/img/w7.jpg')
				},{
					id:8,
					images:require('../../public/img/w8.jpg')
				},{
					id:9,
					images:require('../../public/img/w9.jpg')
				},{
					id:10,
					images:require('../../public/img/w10.jpg')
				}]
			};
		},
	}
</script>

<style>
	.certificate{
		box-sizing: border-box;
	}
	.certificate .box{
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
	}
	.certificate .box .item{
		flex: 1;
		box-sizing: border-box;
	}
	.certificate .box .item img{
		box-sizing: border-box;
		width: 100%;
		height: auto;
		padding: 0px 10px;
	}
	
	.certificate .box .item img:hover{
		-webkit-animation-name: bounce;
		animation-name: bounce;
	}
</style>