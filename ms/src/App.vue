<template>
	
<el-container id="app">
		<el-aside width="220px">
			<admin-aside></admin-aside>
		</el-aside>
		<el-container>
			<el-header>
				<admin-header></admin-header>
				<tabs></tabs>
			</el-header>
			<el-main>
				<keep-alive>
					<router-view/>
				</keep-alive>
			</el-main>
			<el-footer>© 2019.01.06 陈融炫</el-footer>
		</el-container>
	</el-container>
	
</template>

<script type="text/javascript">
	import AdminAside from '@/components/Aside'
	import AdminHeader from '@/components/Header'
	import Tabs from '@/components/Tabs.vue'
	export default {
		data() {
			return {};
		},
		methods: {},
		components: {
			AdminAside,
			AdminHeader,
			Tabs
		},

	};
</script>

<style>
	@import url("assets/css/swiper.min.css");
	@import url("assets/css/font-awesome.css");
	@import url("assets/css/swiper.css");
	@import url("assets/css/animate.css");
	
	html,
	body,
	#app {
		width: 100%;
		margin: 0px auto;
		height: 100%;
		padding: 0px;
		font-family: "方正黑体简体";
		font-size: 18px;
		box-sizing: border-box;
		background-color: #f2f2f2;
	}
	
	.red {
		color: #FE3A5E;
		font-size: 24px;
		font-weight: bold;
		padding: 0px 2px;
	}
	
	.item1 {
		background-color: #fff;
		color: #000;
	}
	/*height*/
	.crx{
		height: 20px;
	}
	
	.el-header {
		height:100px!important;
		background-color: #FFFFFF;
	}
	
	.el-aside {
		background-color: #20222A;
	}
	
	.el-footer {
		background-color: #FFFFFF;
		line-height: 60px;
	}
</style>