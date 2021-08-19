<template>
	<div>
		<label for="id"></label>
		<input id="id" type="text" v-model="user.id"><br>
		<label for="password"></label>
		<input id="password" type="text" v-model="user.passwd">

		<button @click="loginCheck()">login</button>
	</div>
</template>

<script>
export default {
	name: "LoginBox",
	props: ["id"],
	emits: ["login"],
	data() {
		return {
			user: {}
		}
	},
	created() {
		this.user.id = this.id;
		this.user.passwd = '';
	},
	methods : {
		loginCheck() {
			if(this.user.passwd == 'qwer') {
				console.log('login success');
				this.$emit("login", true);
			}
			else {
				console.log('login fail');
				this.$emit("login", false);
			}
		}
	}
}
</script>

<style scoped>
	
</style>