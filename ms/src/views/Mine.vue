<template>
	<div class="mine">
		<navs></navs>

		<router-view/>
	</div>
</template>

<script>
	import Navs from '../components/Navs.vue'
	export default {
		data() {
			return {};
		},
		components: {
			Navs

		},
	}
</script>

<style>

</style>