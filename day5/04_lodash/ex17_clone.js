import _ from 'lodash';

let objects = [
	{'a' : 1},
	{'b' : 2}
];

let _objects = objects;
console.log(_objects === objects);
// => true

console.log('--------clone---------');
let objects2 = _.clone(objects);
console.log(objects === objects2);
console.log(objects[0] === objects2[0]);
// => false
// => true

console.log('--------Deep clone---------');
let object3 = _.cloneDeep(objects);
console.log(objects === object3);
console.log(objects[0] === object3[0]);
// => false
// => false