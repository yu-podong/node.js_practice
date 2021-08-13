import _ from 'lodash';

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let newArr = _.concat(arr1, arr2);

console.log(newArr);
// => [1,2,3,4,5,6]