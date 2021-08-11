// commonjs의 import 방식
const helloFunc = require('./lib_2.js');

let libObj = helloFunc();

libObj.foo1();
libObj.foo2();
console.log(libObj.data);