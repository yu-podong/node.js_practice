//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';

// 이 라인을 넘어가면, 환경변수로 설정한 것이 자동으로 적용됨
dotenv.config();

const app = express();
// port번호가 설정되어있으면 PORT값으로 대체
const port = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);		// cross-env로 넘어온 것
console.log(process.env.MONGODB_URL);	// .env에서 넘어온 것
console.log(process.env.MONGODB_PORT);	// .env에서 넘어온 것

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	// product mode에서는 필요없음
	if(process.env.NODE_ENV === "dev") {
		console.log(`Example app listening at http://localhost:${port}`);
	}
});
