import express from 'express'
import pkg from 'mongodb';

const {ObjectId} = pkg;
const router = express.Router();
	
export default (db_client) => {
	// Middle ware 등록
	// '서비스 허용 도메인' - 크로스 도메인 이슈(CORS) 해결 방법
	router.use('/', (req, res, next)=> {
		console.log(`allowed cors : ${req.originalUrl}`);
		// res.set('Access-Control-Allow-Origin','http://localhost:8080')
		res.set('Access-Control-Allow-Origin','*'); //cors 전체 허용
		res.set('Access-Control-Allow-Method','*'); 
		res.set('Access-Control-Allow-Headers','*'); 
		next();
});

	// 새로운 Data 삽입
	router.post('/insert', async (req, res) => {
		try {
			const database = db_client.db('node_study');
			const memo = database.collection('memo');

			console.log(req.body);

			let _res = await memo.insertOne(req.body);

			res.json({r: 'ok', d: _res});
		}
		catch(e) {
			res.json({r: 'ok', err: e});
		}
	});

	// collection에 들어간 data 가져오기
	router.get('/find/skip/:skip/limit/:limit', async (req, res) => {
		try {
			const database = db_client.db('node_study');
			const memo = database.collection('memo');
			
			let cursor = await memo.find()
				.skip(parseInt(req.params.skip))
				.limit(parseInt(req.params.limit));

			let items = await cursor.toArray();

			res.json({r: 'ok', d: items});
		}
		catch(e) {
			res.json({r: 'ok', err: e});
		}
	});

	// 특정 Data 삭제
	router.get('/delete/id/:id', async(req, res) => {
		try {
			const database = db_client.db('node_study');
			const memo = database.collection('memo');

			let _result = await memo.deleteOne({_id: new ObjectId(req.params.id)});
			
			res.json({r: 'ok', d: _result});
		}
		catch(e) {
			res.json({r: 'ok', err: e});
		}
	});

	return router;
}