import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.NODE_ENV);

// express()는 전역객체이기 때문에, 여러 번 선언해도 하나만 생성
const app = express();

// 요청자체가 파일로 들어왔을 때, 해당 파일을 살펴봄 (정적 웹서비스 미들웨어 등록) 
app.use(express.static('./www'));
// text로 시작하는 것은 text 파일에서 찾음 (text 파일에 대한 middleware 등록)
app.use('/text', express.static('./text'));

// 첫번째 param : 처리할 url
app.get('/api/v1/hello', (req, res) => {
	//res.send('hello express');
	res.json({r:"ok", info: 'hello backend'});
});

app.get('/help', (req, res) => {
	res
	.set('Content-Type', 'text/plain')	// MIME type
	.status(200)
	.send('<h1>help</h1>');
})

app.get('/api/v1/adduser/name/:name/age/:age', (req, res) => {
	res.json({
		r: 'ok',
		type: 'parameter',
		name: req.params.name,
		age: parseInt(req.params.age)
	})
})

app.get('/api/v1/adduser', (req, res) => {
	res.json({
		r: 'ok',
		type: 'query',
		name: req.query.name,
		age: parseInt(req.query.age)
	})
})

// 우리가 지정하지 않은 url에 대해 처리
app.all('*', (req, res) => {
	res
	.status(404)
	.send(`page not found ${req.url}`);
});

app.listen(process.env.PORT, () => {
	console.log(`server start at : ${process.env.PORT}`);
});