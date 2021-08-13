import _ from 'lodash';

// ex1
const _input = [1,2,3,4];

let _output = _.map(_input, (o) => {
    console.log(o)
    return o*o;
});
console.log(_output);

// 1
// 2
// 3
// 4
// [ 1, 4, 9, 16 ]

// ex2
let users = [
    {'user': 'barney', 'age': 20},
    {'user': 'yu-podong', 'age': 21}
];

let _users = _.map(users, 'age');
console.log(_users);
// => [ 20, 21 ]

