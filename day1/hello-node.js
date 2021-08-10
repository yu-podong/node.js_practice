// node.js를 이용하여 브라우저 없이, js를 실행시킬 수 있음
console.log('✨Hello node.js✨');

const { RSA_NO_PADDING } = require('constants');
/* 뭔지는 모르겠지만, 첫 실습 code */
// 인스턴스를 받아오는 것 (node.js에 http가 포함되어 있는 것)
const http = require('http');
// http server 객체를 생성
const http_server = http.createServer( function (req,res) {
  console.log(req.url);
  res.end('hello http server!');
});

http_server.listen(8080);

console.log('start http server at 8080');