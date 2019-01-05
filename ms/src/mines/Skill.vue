<template>
	<div class="skill">
		<div id="myChart" :style="{width: '400px', height: '400px'}"></div>
	</div>
</template>

<script>
	import echarts from "echarts";
	export default {
		data() {
			return {};
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("myChart"));
				let ctx = echarts.getContext('2d');
				var w = 0;
				ctx.strokeStyle = 'red';
				ctx.linewidth =4;
			function drawPie(arr){
					let color = ['red','green','blue','yellow','pink','orange','black'];
					let sum = 0;
					let r = [0];
					for (let i=0;i<arr.length;i++) {
						sum +=arr[i];
					}
					for (let i=0;i<arr.length;i++) {
						r[i+1] = r[i]/sum*360;
					}
					i=0;
					let tmp = r[i];
					let t = setInterval(()=>{
						tmp+=2;
						ctx.beginPath();
						ctx.lineTo(400,400);
						ctx.arc(400,400,400,(r[i]/180*Math.PI),(tmp/180*Math.PI),false);
						if(tmp>=r[i+1]){
							i++
						}
						if(tmp>=360){
							clearInterval(t);
						}
						ctx.fill();
						ctx.fillStyle = color[i%color.length];
						ctx.closePath();
					},5);
				}
				drawPie([1,2,3,4,5,6,7]);
			}
		}
	}
</script>

<style>
	.skill {}
	
	.skill #myChart {
		width: 400px;
		height: 400px;
		border: solid 1px red;
		margin: 50px auto;
		display: block;
	}
</style>