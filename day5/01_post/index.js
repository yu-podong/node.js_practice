import http from 'http';
import {URL} from 'url';

const port = 8090;

http.createServer((req,res) => {

	const urlObj = new URL(req.url, 'http://exam.com');
	let _myCustomHeader = req.headers['my-custom-header'];

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

	// GET, POST인지 구분
	let method = req.method; 

	// GET, POST 처리
	if(method === 'GET') {

		if(urlObj.pathname === "/echo") {
			// search의 params에 해당하는 값을 가져옴
			let _title = urlObj.searchParams.get('title');
			let _msg = urlObj.searchParams.get('msg');

			// result object에 property 추가
			result.title = _title;
			result.msg = _msg;

			// JSON 객체 자체를 보낼 수 없으므로, 문자화해서 전달해야함
			res.end(JSON.stringify(result));
		}
	}
	else if(method === 'POST') {
		if(urlObj.pathname === "/echo") {
			let bodyData = '';

			// 요청측 데이터를 받는 부분, 데이터가 한 번에 오지 않을 수도 있음
			req.on('data', (playload) => {
			bodyData += playload;
			});

			req.on('end', () => {
			result.data = bodyData;
			result.myheader = _myCustomHeader;
			res.end(JSON.stringify(result));
			});
		}
	} 
}).listen(port);

console.log(`listen : ${port}`);
