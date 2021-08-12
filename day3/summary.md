## CURL
`curl -i -X GET http://localhost:8080`
브라우저에 보내는 요청을 똑같이 실행시킨 것
* -i : 헤더까지 출력
* -X : method 지정 (GET, POST)
* uri : http(스키마)를 포함한 전체 요청 문장
--- 
## MONOGO
* mongo compass -> GUI
* mongosh -> CLI
--- 
## MODULE
요즘은 `require`을 안쓰고, `import`를 사용한다.
사용 방법 : `import '가져오려는 식별자' from '해당 식별자가 있는 파일 이름'`

그러나 import하여 다른 js에 있는 어떤 함수/변수를 가져와서 사용하고 싶다면, **package.json**을 생성해야한다.

### package.json 생성 및 설정
* package.json 생성방법 : `npm init`
* import를 사용하려면, 생성된 json에 `"type": "module"`
---
## TCP-IP
**net module + createServer** 
1 .server socket을 열고 기다린다.
2. 접속이 들어오면 클라이언트 소켓을 하나 만든다.(client가 던진 걸 server가 받는다.)
3. 요청을 처리하고, 접속 종료

=> socket을 받을 수 있는 container를 생성

**tcp client**  `new net.socket()`
1. socker을 만들고 접속을 시도한다.
2. 서버에게 요청을 한다.
3. 접속종료를 통지받는다.
---
## Docker로 서비스 돌리기
`docker exec -d -w 'working directory' 'containerID' 명령어`
* -d : 백그라운드에서 실행이 되도록 설정
* -w : 명령을 실행할 때 기준이 되는 working directory 지정
---
## CONTAINER 동기화
컨테이너 내용 유지할 떄, **git 저장소**를 이용한다.

원격으로 컨테이너 접속
소스 작업 후, `commit` + `push`
다른 원격 컨테이너에서 변경한 내용을 `pull`

=> `push`와 `pull`을 이용하여 서로 다른 원격환경을 동기화한다.
