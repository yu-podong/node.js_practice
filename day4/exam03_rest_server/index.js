import http from 'http';
import { url } from 'inspector';
import {URL} from 'url';

const port = 8090;

http.createServer((req,res) => {
  const urlObj = new URL(req.url, 'http://exam.com');

  console.log(`hostname : ${urlObj.hostname}`);
  console.log(`pathName : ${urlObj.pathname}`);
  console.log(`search : ${urlObj.search}`);

  let result = {
    result: 'OK'
  };

  let header = {
    'Content-Type': 'text/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Max-Age': '100',
    'Access-Control-Allow-Header': '*'  // CORS 정책 허용 (*는 모두 허용)
  }
  res.writeHead(200, header);

  /* API가 많을 경우, switch로 처리하는 것이 좋음 */
  // echo 요청 처리
  if(urlObj.pathname === "/echo") {
    // search의 params에 해당하는 값을 가져옴
    let _title = urlObj.searchParams.get('title');
    let _msg = urlObj.searchParams.get('msg');

    // result object에 property 추가
    result.title = _title;
    result.msg = _msg;
  }
  // sum 요청 처리
  else if(urlObj.pathname === "/sum") {
    let num1 = parseInt(urlObj.searchParams.get('a'));
    let num2 = parseInt(urlObj.searchParams.get('b'));

    result.calc = num1+num2;
  }
  // sub 요청 처리
  else if(urlObj.pathname === "/sub") {
    let num1 = parseInt(urlObj.searchParams.get('a'));
    let num2 = parseInt(urlObj.searchParams.get('b'));

    result.calc = num1-num2;
  }
  else if(urlObj.pathname === "/avg") {
    let num1 = parseInt(urlObj.searchParams.get('a'));
    let num2 = parseInt(urlObj.searchParams.get('b'));
    let num3 = parseInt(urlObj.searchParams.get('c'));
    let num4 = parseInt(urlObj.searchParams.get('d'));
    let num5 = parseInt(urlObj.searchParams.get('e'));

    result.calc = (num1+num2+num3+num4+num5)/5;
  }

  // JSON 객체 자체를 보낼 수 없으므로, 문자화해서 전달해야함
  res.end(JSON.stringify(result));

}).listen(port);

console.log(`listen : ${port}`);
