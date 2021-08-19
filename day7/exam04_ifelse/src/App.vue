<template>
  <div>
    <h1 :class="{ yellow: 10 < coinValue && coinValue < 50, red : coinValue < 10, green: coinValue > 50}">{{coinValue}}</h1>
    <input type="text" v-model="coinValue">
  </div>

  <div>
    <p v-if="coinValue >= 50 "> 충분합니다. </p>
    <p v-else-if="coinValue >= 10 "> 부족합니다. </p>
    <p v-else> 너무 부족합니다. </p>
  </div>

  <div>
    <h1 :class="{red : isOn,bg_gray:isOn2}"> Blink </h1>
    <button @click="toggle"> Toggle </button>
    <button @click="toggle2"> Toggle2 </button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      coinValue: 0,
      isOn : false,
      isOn2 : false
    }
  },
  methods : {
    toggle() {
      this.isOn = !this.isOn
    },
    toggle2() {
      this.isOn2 = !this.isOn2
    }
  }
}
</script>

<style>
div {
  border: 1px solid black;
}

h1 {
  text-align: center;
}

.red {
  color: red;
}

.yellow {
  color: yellow;
}

.green {
  color: green;
}
</style>
