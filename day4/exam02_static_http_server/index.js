import http from 'http';
import nodeStatic from 'node-static';

const port = 8080;

// 실제 contents가 있는 folder 경로 작성
const fileServer = new (nodeStatic.Server)('./www');

http.createServer((req, res) => {

  console.log(req.url);
  fileServer(req, res);

}).listen();

console.log(`listen ${port}`);