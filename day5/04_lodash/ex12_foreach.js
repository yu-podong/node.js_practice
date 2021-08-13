import _ from 'lodash';

_.forEach([1,2,3,4], o=>console.log(o));
// 1
// 2
// 3
// 4

console.log('------------------------');

_.forEach({'a' : 1, 'b' : 2}, (o, key) => {
    console.log(`key : ${key}, value : ${o}`);
});

// ------------------------
// key : a, value : 1
// key : b, value : 2