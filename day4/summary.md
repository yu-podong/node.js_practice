## 정적 web server with scratch
1. `npm init`을 통해 **package.json**을 생성
2. package.json에 가서 `"type": "module"`을 추가
3. **index.js**을 생성하여 작업 (세부 내용을 해당 파일 확인)
4. html파일을 여러 개 생성하여 `readFileSync()`으로 

## node static로 정적 web server
1. 터미널로 `npm install node-static` 실행
   _- npm = node package management (외부 패키지 관리)_
2. `new (nodeStatic.Server)()`를 이용하여 실제 web contents가 있는 folder경로 작성


## package.json
다른 환경에서 구현한 프로젝트를 또 다른 환경에서 clone했을 때, 해당 프로젝트에서 사용한 패키지들이 필요하다면
  => package.json에 있는 종속성과 관련된 패키지들을 `npm install` 통해 자동으로 다운 

## REST Server
`res.writeHeader(상태코드, 헤더정보)`
* 200 : 성공
* 400 : 실패 (클라이언트 측의 책임)
* 500 : 실패 (서버측 책임)

### REST API TEST
`.http`파일을 사용하여 CURL을 사용하지 않고도, `GET`, `POST`를 테스트할 수 있다.
만약 CURL을 이용하여 다중 params을 전송하려면 `-d`옵션을 사용해야한다.
  ex. `curl -i -X -d "msg=hello" -d "title=nodeJs" -G 'uri'`

> **URL 구조**
> hostname/pathname?search
>  - search에서 param이 여러 개이면, `&`로 구분한다.
> 정적 web server의 특징 : 파일 이름을 보내서 해당 파일의 내용을 읽는다.
> REST server의 특징 : 기능 이름을 보낸다.

## PROMISE
es6의 대표적인 비동기 객체
=> 동기화가 필요한 로직단위를 묶어서 체인으로 관리하는 것

`then()` : 동기식으로 체인화됨
`resolve()` : 다음 체인으로 넘어감

### async, await
`Promise()`와 세트로 쓰이는 친구들

`async()` : 함수내에서 동기화 키워드인 `await()`를 사용할 수 있다.
            promise와 같이 사용되며, 비동기 코드의 가독성을 올릴 수 있다.

