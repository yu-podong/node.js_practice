import _ from 'lodash';
import drop from 'lodash';

console.log(_.drop([1, 2, 3, 4, 5, 6]));                
// => [2,3,4,5,6]
console.log(_.drop(_.drop([1, 2, 3, 4, 5, 6])));      
// => [3,4,5,6]
