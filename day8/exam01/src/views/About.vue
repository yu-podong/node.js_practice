<template>
  <div class="about">
    <h1>This is an About page</h1>

    <button @click="goHome"> go Home</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'About',
  components: {},
  methods : {
    goHome() {
      // router 객체에 접근할 수 있음
      this.$router.push({
        "path" : "/"
      });
    }
  }
}
</script>

<style scoped>
h1 {
	color: green;
}
</style>