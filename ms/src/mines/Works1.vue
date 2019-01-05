<template>
	<div class="works1">
		<div class="item">
			<div class="its" v-for="(row,j) in prc">
				<img :src="row.image" class="animated" />
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				prc: [{
					image: require('../../public/img/m10.jpg'),
				}, {
					image: require('../../public/img/me01.jpg'),
				}, {
					image: require('../../public/img/me02.jpg'),
				}, {
					image: require('../../public/img/m7.jpg'),
				}]

			};
		},
	}
</script>

<style>
	.works1 {
		width: 100%;
	}
	
	.works1 .item {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
	}
	
	.works1 .item .its {
		flex: 1;
		-webkit-flex: 1;
		box-sizing: border-box;
		width: 100%;
		padding: 0px 10px;
	}
	
	.works1 .item img {
		box-sizing: border-box;
		width: 100%;
	}
	
	.works1 .item img:hover{
		-webkit-animation-name: shake;
		animation-name: shake;
	}
</style>