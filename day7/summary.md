## Vue.js
[Vue.js 공식 문서로 이동하기](https://kr.vuejs.org/)

### vue 관련 command
* `npm install -g @vue/cli` : vue 작업환경 자동으로 set-up
* `vue create 'projectName'` : 'projectName'으로 프로젝트 생성
* `vue add ...` : 플러그인 추가
* `npm run serve` : vue 실행  

### vue project file
**asset** : 정적 resource 저장하는 공간  
**public** : 

> template tag 안에는 최소 하나의 child tag가 존재해야 한다.  
> vue에서는 `onclick`과 같은 event 속성 -> `@click="..."`  
> handler function을 인자값 없이 이름만 쓰면, 첫번째 인자로 evt 객체가 넘겨진다.

  
### script 부분
`data()` : 해당 파일에서 사용할 변수 선언 (reactive data)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> reactive data가 바뀌면, web이 변경사항을 반영  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if. non-reactive data가 바뀌면, re-loading X   
`mothods` : 해당 파일에서 사용할 메소드들을 선언  
`created()` : DOM이 create되기 직전 상태에서 실행 (= hock function) ex. 변수 초기화

**추가적인 life-cycle function은 [[여기]](https://kr.vuejs.org/v2/guide/)를 확인하세요.**

### data & method
* **:속성이름 = 변수이름** : 속성값에 변수값이 들어간다.  
ex. `<input :value="textVal">`
* **속성이름 = 변수이름** : 변수이름이 속성값으로 들어간다.

### v-model
쌍방향 데이터 동기화 (view <-> model)  
&nbsp;&nbsp;&nbsp;ex. `<input v-model="dataName">`

### Props & emits
**props** : `props: [...]`에서 []안에 있는 변수를 해당 component에서 받음  
**emits** : `emits: [...]`에서 []안에 있는 변수를 다른 component로 전달

> props : App -> component  
> emit : component -> App  
> `@login`과 같은 커스텀 이벤트에 대해 [[여기]](https://v3.ko.vuejs.org/guide/component-custom-events.html#%E1%84%8F%E1%85%A5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%86%B7-%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3-%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)를 참조하세요.

### v-for
[[공식문서 바로가기]](https://v3.ko.vuejs.org/guide/list.html#v-for%E1%84%85%E1%85%A9-%E1%84%8B%E1%85%A6%E1%86%AF%E1%84%85%E1%85%B5%E1%84%86%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3%E1%84%8B%E1%85%A6-%E1%84%87%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%AF-%E1%84%86%E1%85%A2%E1%84%91%E1%85%B5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)  
`for 'singleEle' in 'Array'`
