<template>
  <!-- `v-bind:속성`을 간략화한 것 = `:속성`-->
  <div v-html="tags"></div>
  <button @click="changeHtml"> change</button>

  <div>
    <img :src="imgSrc" alt="">
    <br>
    <button @click="onSrc100"> size 100</button>
    <button @click="onSrc200"> size 200</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      tags: '<h1> hello view </h1>',
      // imgSrc100: 'https://placeimg.com/100/100/tech',
      // imgSrc200: 'https://placeimg.com/200/200/tech',
      imgSrc : ''
    }
  },
  methods : {
    changeHtml() {
      this.tags = `
        <ul>
          <li>item1</li>
          <li>item2</li>
        </ul>`;
    },
    onSrc100() {
      this.imgSrc = 'https://placeimg.com/100/100/tech';
    },
    onSrc200() {
      this.imgSrc = 'https://placeimg.com/200/200/tech';
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid black;
}
</style>
