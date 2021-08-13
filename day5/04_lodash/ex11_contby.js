import _ from 'lodash'

console.log(_.countBy([1,2,3,1,2,5,6]));
// => { '1': 2, '2': 2, '3': 1, '5': 1, '6': 1 }