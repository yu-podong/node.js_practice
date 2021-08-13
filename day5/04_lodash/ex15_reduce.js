import _ from 'lodash';

const _input = [1,2,3,4];
let _output = _.reduce(_input, (acc, o) => {
	console.log(o);
	acc += o;

	return acc;
}, 0);

console.log(_output);

// map처럼 사용하는 방법
_output = _.reduce(_input, (accumulator, currentValue) => {
	// 짝수가 아니면 추가
	if(currentValue  % 2) {
		accumulator.push(currentValue);
	}

	return accumulator;
});

console.log(_output);