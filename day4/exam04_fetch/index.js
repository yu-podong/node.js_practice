import fetch from 'node-fetch';

/*
fetch('http://localhost:8090/echo?title=hello&msg=nodeJs')
  .then((res) => {
    return res.json();
  })
  .then((jsonObj) => {
    console.log(jsonObj);
  });
*/

// 하나의 namespace가 만들어진 것
(async function() {
  let res = await (await fetch('http://localhost:8090/echo?title=hello&msg=nodejs')).json();
  console.log(res);

})();