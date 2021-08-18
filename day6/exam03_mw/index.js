import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import {logger, autholize, testMw_1, testMw_2} from './middleware.js';	// middleware 자체를 밖으로 빼버림
dotenv.config();

const app = express();

/* 전역 스코프 - codeline10, codeline12 */
// middleware1 (여러 개 등록 가능 but 순서 중요)
app.use(logger);
// middleware2 
app.use([morgan('tiny'), autholize]);
// `app.use(logger, autholize)` or `app.use([logger, autholize])`도 가능

// home에서만 적용되는 middleware
app.use('/home', testMw_1);
// about에서만 적용되는 middleware
app.use('/about', testMw_2);

//------------------------------------------------------------------------------------
app.get('/home', (req, res) => {
	res.send('<h1>home</h1>');
});

app.get('/home/intro', (req, res) => {
	res.send('<h1>welcome</h1>');
});


app.get('/about', (req, res) => {
	res.send('<h1>about</h1>');
});

// use를 사용하지 않고 직접 middleWare를 포함시키는 방법
app.get('/blog', 
	(req, res, next) => {
		console.log('blog middle ware')	;
	},
	(req, res) => {
		res.send('<h1>blog</h1>');
	}
);	

//------------------------------------------------------------------------------------
app.listen(process.env.PORT, () => {
	console.log(`server start at : ${process.env.PORT}`);
});