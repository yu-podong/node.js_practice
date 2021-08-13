import http from 'http';
import {URL} from 'url';
import fs from 'fs';

const port = 8080;

// 'http://localhost:8080/index.html' 이런 식으로 요청을 받아옴
// 근데 8080 뒤부터 받아서 해당 페이지가 있는지 없는지 확인하는 과정이 필요
// req : uri 정보가 담김
http.createServer((req, res) => {
  // URI를 parsing -> new URL(파싱할 문장, 상대경로일 경우 앞에 불일 호스트 주소)
  console.log(req.url);
  console.log(req.method);
  const urlObj = new URL(req.url, "http://exam.com");

  console.log(urlObj.pathname);

  // 직접 header 생성 (생성 안하면 자동으로 default값 붙음)
  let header = {
    'Content-Type' : 'text/html'
  };

  // 파일을 읽기 위해 파일 경로 완성
  let _path = './www' + urlObj.pathname;
  console.log(_path);

  
  try {
    /* 응답할 때는 res로 응답 */
    // index.html을 읽어라
    //200 : web server가 성공적으로 요청을 접수했다.
    let data = fs.readFileSync(_path);
    res.writeHeader(200, header);
    res.end(data);
  }
  catch(e) {
    header['Content-Type'] = 'text/plain';
    res.end('file not found');
  }

}).listen(port);

console.log(`listen port : ${port}`);
