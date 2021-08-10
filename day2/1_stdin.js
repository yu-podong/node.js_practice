process.stdin.resume();  // keyboard를 받기 위해서 대기
process.stdin.setEncoding('utf-8');

const util = require('util');

/* 개행문자 단위로 문자를 읽어오는 실습 */
// 뭔가 데이터가 들어오면, function을 실행 (비동기)
// text : 입력받은 어떤 text
process.stdin.on('data', (text) => {
  // 'exit'라는 문자열이 입력되면, 입력 종료
  if(text === 'exit\r\n') {
    process.exit();
  }
  console.log(`echo : ${text}`);
});