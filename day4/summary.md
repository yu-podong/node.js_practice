## 정적 web server with scratch
1. `npm init`을 통해 **package.json**을 생성
2. package.json에 가서 `"type": "module"`을 추가
3. **index.js**을 생성하여 작업 (세부 내용을 해당 파일 확인)
4. html파일을 여러 개 생성하여 `readFileSync()`으로 

## node static로 정적 web server
1. 터미널로 `npm install node-static` 실행
   _- npm = node package management (외부 패키지 관리)_
2. `new (nodeStatic.Server)()`를 이용하여 실제 web contents가 있는 folder경로 작성