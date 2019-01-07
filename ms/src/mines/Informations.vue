<template>
	<div class="informations clear">
		<div class="box left">
			<div class="name">
				姓名：<span>陈融炫</span> 籍贯：
				<span>上海崇明</span> 身高：
				<span>166cm</span> 专业：
				<span>UI/Web前端</span>
			</div>
			<div class="phone">
				手机：<span>15002147217</span> QQ:&nbsp;&nbsp;
				<span>1038906357</span> 微信：
				<span>Abel90crx</span>
			</div>
			<div class="e-mail">
				E-mail:&nbsp;&nbsp;<span>hengmeilengshu1314@qq.com</span>
			</div>
			<div class="education">
				学历：<span>大专（在籍）行政管理/大专（在籍）法律事务</span>
			</div>
		</div>
		<div class="right shake">
			<div class="round infinite animated">
				<span class="mi animated infinite"></span>
				<span class="mi1 animated infinite"></span>
				<span class="mi2 animated infinite"></span>
				<span class="mi3 animated infinite"></span>
				<span class="mi4 animated infinite"></span>
				<span class="css">css:&nbsp;&nbsp;86%</span>
				<span class="ae">Ae:&nbsp;&nbsp;30%</span>
				<span class="js">js:&nbsp;&nbsp;50%</span>
				<span class="ai">AI:&nbsp;&nbsp;76%</span>
				<span class="ps">PS:&nbsp;&nbsp;80%</span>
				<span class="dw">Dw:&nbsp;&nbsp;75%</span>
				<span class="fw">Fw:&nbsp;&nbsp;70%</span>
			</div>
			
			
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
	}
</script>

<style>
	.clear:after{
		display: block;
		content: "";
		clear: both;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.informations {
		background-color: #fff;
		margin-top: 40px;
		/*position: relative;*/
		box-sizing: border-box;
	}
	
	.informations .box{
		box-sizing: border-box;
		padding: 20px;
		/*background-color: saddlebrown;*/
	}
	.informations .box div{
		margin: 20px 0px;
	}
	.informations .box span{
		margin-right: 50px;
	}
	.informations .shake{
		position: relative;
	}
	.informations .shake span{
		position: absolute;
		font-size: 14px;
		color: #fff;
	}
	.informations .shake span.css{
		bottom: 30px;
		right: 60px;
	}
	.informations .shake span.js{
		bottom: 76px;
		right: 10px;
	}
	.informations .shake span.ae{
		bottom: 56px;
		left: 14px;
	}
	.informations .shake span.ai{
		top: 66px;
		right: 10px;
	}
	.informations .shake span.dw{
		top: 24px;
		right: 54px;
	}
	.informations .shake span.fw{
		top: 32px;
		left: 24px;
	}
	.informations .shake span.ps{
		top: 84px;
		left: 10px;
	}
	
	.informations .round{
		width: 200px;
		height: 200px;
		position: relative;
		border-radius: 50%;
		margin-top: 10px;
		margin-right: 100px;
		background-image: linear-gradient(to top, transparent 50%, #655 0);
		background-color: skyblue;
	}
	
	.informations .mi{
		width: 100px;
		border-bottom: 100px solid salmon;
		border-radius: 100px 0px 0px 0px;
		transform-origin: bottom right;
    	transform: rotate(.1turn);

	}
	.informations .mi1{
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100px;
		border-bottom: 100px solid mediumspringgreen;
		border-radius: 0 0 0 100px;
		display: inline-block;
		transform-origin: top right;
    	transform: rotate(.21turn);
	}
	.informations .mi2{
		width: 100px;
		border-bottom: 100px solid violet;
		margin-left: 100px;
		display: inline-block;
		position: absolute;
		top: 0px;
		right: 0px;
		border-radius: 0 100px 0 0;
		transform-origin: bottom left;
    	transform: rotate(.6turn);
	}
	.informations .mi3{
		width: 100px;
		border-bottom: 100px solid slateblue;
		margin-left: 100px;
		display: inline-block;
		position: absolute;
		bottom: 0px;
		right: 0px;
		border-radius: 0 0 100px 0;
		transform-origin: top left;
    	transform: rotate(.2turn);
	}
	.informations .mi4{
		width: 100px;
		border-bottom: 100px solid deeppink;
		margin-left: 100px;
		display: inline-block;
		position: absolute;
		bottom: 0px;
		right: 0px;
		border-radius: 0 0 100px 0;
		transform-origin: top left;
    	transform: rotate(.1turn);
	}
	
	.informations .shake .round:hover{
		-webkit-animation-name: pulse;
		animation-name: pulse;
	}
	
</style>