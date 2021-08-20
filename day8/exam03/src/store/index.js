import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    updateTodos(state, payload) {
      state.todos = payload;
    }
  },
  actions: {
    updateTodos(context) {
      //axios
      console.log(context);
      (async () => {
        try{
          let url = 'https://jsonplaceholder.typicode.com/todos';
          let {status, data} = await axios.get(url);

          // 제대로 통신했다면, status == 200 / date == json
          console.log(status);
          //console.log(data);

          context.commit('updateTodos', data);
        }
        catch(e) {
          console.log(e);
        }
      })();
    }
  },
  modules: {
  }
})
