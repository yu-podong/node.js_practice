<template>
  <div>
    <h1>{{msg}}</h1>

    <button @click="changeMsg('hello')"> change </button>
    <button @click="changeMsg('vue')"> change </button>
    <button @click="changeMsg('world')"> change </button>
  </div>

  <div>
    <h2>Reactive Counter</h2>
    <p>{{counter}}</p>
    <button @click="increaseCount()"> increase </button>
    <button @click="decreaseCount()"> decrease </button>
    <button @click="resetCount()"> reset </button>
  </div>

  <div>
    <h2>Non Reactive</h2>
    <h5>{{myCounter}}</h5>
    <button @click="resetMyCount()"> reset </button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data : () => { // reactive한 data
    return {
      msg: '어서와 vue는 처음이지?',
      counter: 0
    }
  },
  methods : { //해당 파일에서 사용할 메소드들을 선언
    changeMsg(msg) {
      this.msg = msg;
    },
    increaseCount() {
      this.counter++;
    },
    decreaseCount() {
      this.counter--;
    },
    resetCount() {
      this.counter = 0;
    },
    resetMyCount() {
      this.myCounter = 0;
    }
  },
  /* life-cycle hock function */
  created() { // DOM이 create되기 직전 상태에서 실행
    this.counter = 100;
    this.myCounter = 200;
  },
  onUpdated() {

  }
}
</script>

<style scope>
h1 {
  color: red;
}
div {
  border: 1px solid black;
  margin-top: 2px;
  padding: 10px;
}
</style>
