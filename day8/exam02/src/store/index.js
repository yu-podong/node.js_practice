import { createStore } from 'vuex'

export default createStore({
  state() {
    let _counter = 10
    
    if(localStorage.getItem('counter') !== null) {
      _counter = parseInt(localStorage.getItem('counter')) ;
    }
    else {
      localStorage.setItem('counter', _counter);  // 초기값 등록
    }

    return {
      // view 쓰일 전역 변수 = counter
      counter: _counter
    }
  },
  mutations: {
    increCount(state) {
      state.counter++;
      localStorage.setItem('counter', state.counter);
    },
    decreCount(state) {
      state.counter--;
      localStorage.setItem('counter', state.counter);
    },
    reset(state, payload) {
      state.counter = payload;
      localStorage.setItem('counter', state.counter);
    }
  },
  actions: {
  },
  modules: {
  }
})
