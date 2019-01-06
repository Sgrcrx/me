<template>
	<div class="about">
		<navs></navs>
		<footers></footers>
		
		
		
		<router-view/>
	</div>
</template>

<script>
	import Navs from '../components/Navs.vue'
	import Footers from '../components/Footers.vue'
	export default {
		data() {
			return {};
		},
		components: {
			Navs,
			Footers

		},
	}
</script>

<style>

</style>