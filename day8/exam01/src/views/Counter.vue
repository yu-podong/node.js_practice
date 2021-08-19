<template>
	<div>
		<h1> The Counter </h1>
		<h2>{{counter}}</h2>

		<button @click="increCount()"> increase </button>
	</div>
</template>

<script>
export default {
	name: 'Counter',
  components: {},
	data() {
		return {
			counter: 0
		}
	},
	methods :{
		increCount() {
			this.counter++;
		}
	}
}
</script>

<style scoped>

</style>