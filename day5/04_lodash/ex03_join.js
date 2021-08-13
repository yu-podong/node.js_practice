import _ from 'lodash';

let ip = _.join([192, 168, 0, 2], '.');
console.log(ip);           // => 192.168.0.2

let _data = _.split(ip, '.');
console.log(_data);      // => [192, 168, 0, 2]
