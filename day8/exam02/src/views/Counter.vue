<template>
	<div>
		<h1> The Counter </h1>
		<h2>{{counter}}</h2>

		<button @click="increCount()"> increase </button>
		<button @click="decreCount()"> decrease </button>
		<button @click="reset()"> reset </button>
	</div>
</template>

<script>
export default {
	name: 'Counter',
	computed: {
		counter() {
			return this.$store.state.counter;
		}
	},
	methods : {
		increCount() {
			this.$store.commit('increCount');
		},
		decreCount() {
			this.$store.commit('decreCount');
		},
		reset() {
			// 두번째 인자로 특정 값을 전달할 수 있음
			this.$store.commit('reset', 10);
		}
	}
}
</script>

<style scoped>

</style>