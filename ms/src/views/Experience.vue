<template>
	<div class="Experience">
		<navs></navs>
		<introductions class='w'></introductions>

		<footers></footers>
		<div class="crx"></div>
		<router-view/>
	</div>
</template>

<script>
	import Navs from '../components/Navs.vue'
	import Footers from '../components/Footers.vue'
	import Introductions from '../mines/Introductions.vue'

	export default {
		data() {
			return {};
		},
		components: {
			Navs,
			Footers,
			Introductions

		},
	}
</script>

<style>
	.Experience {
		width: 100%;
		height: 100%;
	}
	
	.Experience .w {
		margin-top: 100px;
		width: 100%;
		height: auto;
		box-sizing: border-box;
	}

</style>