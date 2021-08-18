## cross-env
`npm i -D cross-env nodemon` 후, **package.json**에서 `script`부분에 한 줄 추가한다.  
`"dev": "cross-env NODE_ENV=dev nodemon index"`

=> `npm run dev`를 통해 개발모드로 실행한다.
* `NODE_ENV=dev` : 환경변수

**package.json**에서 `script`부분에 한 줄 추가한다.  
`"start": "cross-env NODE_ENV=product node index",`

=> `npm start`를 통해 product모드로 실행한다.

## dotenv
`npm i express dotenv`를 설치 후, **.env**파일을 생성한다.  
그 후, 원하는 이름의 환경변수를 선언 및 초기화한다.

=> 해당 환경변수를 사용하려면 `dotenv.config()`를 호출해야한다.

> dotenv는 실행 후, 환경변수를 넘기는 방식  
> cross-env는 실행 전, 환경변수를 넘기는 방식  
> 위의 것들로 설정한 환경변수는 `process.env.환경변수이름`으로 사용한다.

## EXPRESS processing pipeline
**req(요청) -> { middleware(데이터 1차 가공) -> routing } -> res(응답)**
* middleware : use
* router : express.Router
* res : get, post, (put, delete)

## GET
get method 처리의 마지막 단계
* `req` : middleware들을 통해 처리된 요청객체 -> http 원본 요청 객체와는 다름
* `res` : 응답객체 -> send, json, sendFile

## MIME
https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types
* text/html
* text/plain
* application/json
* text/json

## 매개변수 전달하는 방법
1. **query**  
-> http://localhost:8080/api/v1/adduser?name=Tommy&age=28
  
2. **parameter(express)**  
-> http://localhost:8080/api/v1/addUser/name/Tommy/age/28

## USE
custom function이며, 카테고리 별로 나누어 적용 (get, post : 하나만 적용)
* 단일 미들웨어 등록 : `use(pathname, middleWareFunc)`  
* 다중 미들웨어 등록 : `use(pathname, [middleWareFunc, ...]`

## POST
**SSR(Server Side Rendering)**   
전통적인 방식 ex) JSP, PHP

**CSR(Client Side Rendering)**  
single page app
> 공통적으로 body parser 사용 : `express.urlencoded`

## ROUTER
**req(요청) -> middleware -> res(응답)** 과정을 하나로 묶는 방법