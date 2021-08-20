import express from 'express'
import dotenv from 'dotenv'
import pkg from 'mongodb';
import mongoRouter from './database/db_memo.js'
dotenv.config();

(async () => {
	try {
		const { MongoClient } = pkg;

		/* MongoDB 접속 */
		const db_client = new MongoClient(process.env.MONGODB_URL);
		let _result = await db_client.connect();	// MONGODB_URL로 접속해라
		console.log(`db connect ok`);
		
		/* express 실행 */
		const app = express();
		// json 미들웨어 등록
		app.use(express.json());
		app.use('/api/v1/memo', mongoRouter(db_client));

		if(process.env.NODE_ENV === 'dev') {
			app.get('/hello', (req, res) => {
				res.json({r: 'ok'});
			});
		}

		app.listen(process.env.PORT, ()  => {
			if(process.env.NODE_ENV === 'dev'){
				console.log(`server start at : ${process.env.PORT}`);
			}
		}); 
	}
	catch(err) {

	}
})();



