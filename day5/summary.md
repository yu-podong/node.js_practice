## POST
큰 용량의 통신, 보안이 필요한 상황, 바이너리 전송 시 사용

### body 
헤더 이후에 개행문자 2개가 연속으로 나온 뒤에 오는 데이터(끝까지)
여기에 데이터를 넣어서 전송하면, get에서 search에 데이터 전송

## Fetch vs Axios
공통점 : 요청 객체 
 - `fetch` : 표준 / 호환성 low / 사용편의성 중간 / 가벼움
 - `axios` : 비표준 / 호환성 high / 사용편의성 높음 / 무거움

## Lodash
`npm i lodash` : commonjs 용
`npm i lodash-es` : es6 용

### array 관련 주요 모듈
* `drop`
* `remove`
* `take`
* `join`
* `flatten`
