<template>
  <div>
    <h1>Todo manager</h1>
    <div>
      <button @click="getTodoList()">get todos</button>
      <button @click="getTodolist_store()">get todos store</button>
      <ul>
        <li v-for="(item, index) in todos" :key="index" >
          {{item.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  computed : {
    todos() {
      return this.$store.state.todos;
    }
  },
  methods : {
    getTodoList() {
      (async () => {
        let url = 'https://jsonplaceholder.typicode.com/todos';
        let {status, data} = await axios.get(url);

        // 제대로 통신했다면, status == 200 / date == json
        console.log(status);
        console.log(data);        
      })();
    },
    getTodolist_store() {
      this.$store.dispatch('updateTodos');
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
