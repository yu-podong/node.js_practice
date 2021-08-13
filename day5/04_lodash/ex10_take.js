import _ from 'lodash';

console.log(_.take([1,2,3,4,5,6,7]));
// => [1]

console.log(_.take([1,2,3,4,5,6,7], 2));
// => [1, 2]

console.log(_.takeWhile([1,2,3,4,5,6],o=>o<=3));
// => [ 1, 2, 3 ]
