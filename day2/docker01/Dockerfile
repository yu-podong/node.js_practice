# 이미지 받아오기 - node.js만 깔려있는 docker
FROM node:14

# 1. docker build . -t study/hello-node:step1

# 2. docker create -it --name doc-node-test study/hello-node:step1
#    : doc-node-test라는 container를 생성

# <새로운 컨테이너 생성 방법 - 포트 포워딩 사용>
# 2-1. docker create -it -p 8080:8080 -p 8022:22 --name doc-node-test study/hello-node:step1
#      : docker의 8080 port를 local의 8080으로 포트 포워드 해줘라

# 3. docker start 'container ID'
#    : 작성한 ID에 해당하는 container 실행

# 4. docker exec -it 'container ID ' bash
#    : 실행중인 container에 접속 - 가상의 환경에서 Linux에 들어옴
# 4-1. ssh root@localhost -p 8022 (선행 : 위의 code 실행 후, service ssh start -> exit)
#      : ssh로 접속

# 5. docker ps
#    : 현재 실행중인 container list 보여줌 (-a 사용 -> stop된 것도 보여줌)

# 6. docker rm 'containerID'
#    : 해당 컨테이너를 삭제

# 7. docker stop 'container ID'
#    : 해당 컨테이너를 멈춘다 (그렇지 않으면 컴퓨터가 off되도 돌아감)

# 묻지도 말고 설치해주세요 (build 단계에서 하는 apt를 실행)
RUN apt-get update && \
apt-get install -y vim nano net-tools openssh-server

# 8. docker search 'name'
#    : 
# 9. docker pull mongo:버전(생략가능)
#    : dockerfile의 FROM 과정을 수동으로 실행

# 10. docker run --name mongoContainer -d -p 27017:27017 -v 'db folder name' 'image Name'
#     : run = create + start

# docker의 volumn
# : Linux의 마운트처럼 내 PC의 일부 메모리 영역을 docker의 가상으로 올려버림
