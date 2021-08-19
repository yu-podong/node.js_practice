## ROUTER
공통적인 style은 `App.vue`에 작성하면 됨

새로운 vue 파일은 view폴더에 생성하면, <span style="color: green; font-weight: bold">새로운 vue에 대해 router에 등록</span>해야한다.  

router object는 script단에서 직접 조정할 수 있다.  

### programmable Router
`go` : 
`push`
`replace`

### router > index.js에서
* 사용자에게 필수로 보여줘야 하는 페이지는 **정적 import** (app가 실행될 때 loading됨)  
-> js파일의 최상단에 `import 'exportName' from 'filePath'`

* 그 외의 페이지는 **동적 import** (해당 view가 보여질 때 loading됨)  
-> js파일의 component 부분에 `component : () => import('vue file path')`

> router를 쓰면 발생하는 문제  
> : 다른 페이지에 갔다오면 기존의 데이터가 초기화됨  
>  
>  위의 문제를 해결하고자 `store`를 사용

## Store(Vuex)
1. store folder의 `state()`를 이용하여, 유지하고 싶은 변수의 이름을 선언한다.  
2. 해당 변수를 사용하고자 하는 view에서 `computed`를 이용하여 가져올 수 있다. _but view에서 직접적으로 수정하는 것은 권장하지 않는다._

3. 그래서 직접 수정이 필요할 땐, store folder의 `mutation`을 이용한다.  

4. 사용하고자 하는 view에서 `methods`를 통해 함수 생성 -> `commit` 이용하여 가져옴

```js
// store > index.js
state() {
	counter : 10;
}
mutations: {
	increCount(state) {	// 무조건 state 사용 (this 사용 불가)
		state.counter++;
	},
	reset(state, payload) {
		state.counter = payload;
	}
}

// view
computed: {
	counter() {
		return this.$store.state.counter;
	}
},
methods : {
	increCount() {
		// 두번째 인자로 특정 값을 전달할 수 있음
		this.$store.commit('increCount');
	},
	reset() {
		// 두번째 인자로 특정 값을 전달할 수 있음
		this.$store.commit('reset', 5);
	}
}
```
