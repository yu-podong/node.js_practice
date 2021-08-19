<template>
  <div>
    <h1>Add Todo</h1>
    title : <input type="text" v-model="title"><br>
    text : <input type="text" v-model="text"><br>
  
    <button @click="addTodo">Add</button>
  </div>

  <div>
    <ul>
      <li v-for="(item, index) in toDoList" :key=index :id="index">
        <h5>{{item.title}}</h5>
        <p>{{item.text}}</p>
        <button @click="delTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: { },
  data() {
    return {
      title: '',
      text: '',
      toDoList: [
        { title: '고양이 밥 주기', text: '오전 9시까지' },
        { title: '운동하기', text: '마스크 쓰고 나가기' },
        { title: '백신 신청하기', text: '다음주 마감' }
      ]
    }
  },
  methods : {
    addTodo() {
      this.toDoList.push({
        title: this.title,
        text: this.text
      });
    },
    delTodo(index) {
      console.log(index);
      document.querySelector(`ul li#${index}`).remove();
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid black;
  padding: 5px;
  margin-bottom: 5px;
}
li {
  background-color: beige;
  border-bottom: 1px solid gray;
  margin-bottom: 2px;
}
</style>
