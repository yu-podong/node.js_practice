import express from 'express';

const app = express();
const server_port = 8080;

// 정적 web site 지정
app.use(express.static('./www'));
app.get('/hello', (req, res) => {
	// client에게 보내는 message
	res.send('hi express👋👋');
});
app.listen(server_port);