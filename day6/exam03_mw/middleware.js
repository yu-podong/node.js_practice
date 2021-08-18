const logger = (req, res, next) => {
	console.log(req.method, req.url, (new Date()).toISOString());
	next();	// next를 해야 다음으로 넘어감
};

const autholize = (req, res, next) => {
	if(req.query.apikey == 'qwer') {
		next();
	}
	else {
		res.send('<h1>인증이 필요합니다.</h1>');
	}
};

const testMw_1 = (req, res, next) =>{
	console.log('check test 1');
	next();
}

const testMw_2 = (req, res, next) =>{
	console.log('check test 2');
	next();
}

// 외부에서 여러 개를 사용하려면, {} 안에 원하는 식별자 작성
export {logger, autholize, testMw_1, testMw_2};