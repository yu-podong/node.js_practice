/* commonjs의 export 방법*/

// 외부에서 쓰고싶은 data
let importData = 12345;

// printHello() 이외에도 외부에서 쓰고싶은 함수s
function testFunc1() {
  console.log('important Function1');
}
function testFunc2(){
  console.log('important Function2');
}

// 외부에서 쓰고싶은 함수
function printHello() {
  console.log('hello es5');
  return {
    foo1: testFunc1,
    foo2: testFunc2,
    data: importData
  }
}

// 외부에서 사용할 함수를 작성 
// (여러 함수를 작성하고 싶으면, 하나의 함수로 다른 함수를 접근할 수 있도록 작성)
// React에서는 '외부로 내보낼 함수 이름 = 해당 파일 이름'라고 제시함
module.exports = printHello;