//import _ from 'lodash';
import findIndex from 'lodash';	//lodash의 많은 모듈 중에 `findIndex`만 가져옴

console.log(_.VERSION);

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',      'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
   
_.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0

// The `_.matches` iteratee shorthand.
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1

// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0

// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2