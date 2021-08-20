import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    memoList : [],
    bNowWriting: false
  },
  mutations: {
    updateMemoList(state, payload) {
      state.memoList = payload;
    }
  },
  actions: {
    async updateMemoList(context) {
      try {
        // Object 중 필요한 것만 selecting하는 것
        let {status, data} = await axios.get('http://localhost:8080/api/v1/memo/find/skip/0/limit/100');

        console.log(status);
        console.log(data);

        context.commit('updateMemoList', data.d);
      }
      catch(e) {
        console.log(e);
      }
    },
    async writeMemo(context, payload) {
      context.state.bNowWriting = true;

      let _res = await axios({
        method: 'POST',
        url: 'http://localhost:8080/api/v1/memo/insert',
        data: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      context.state.bNowWriting = false;
    },
    async deleteMemo(context, payload) {
      try {
        // Object 중 필요한 것만 selecting하는 것
        let {status, data} = await axios.get(`http://localhost:8080/api/v1/memo/delete/id/${payload}`);

        console.log(status);
        console.log(data);

        context.dispatch('updateMemoList');
        //context.commit('updateMemoList', data.d);
      }
      catch(e) {
        console.log(e);
      }
    }
  },
  modules: {
  }
})
