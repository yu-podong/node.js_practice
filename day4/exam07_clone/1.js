let obj1 = {
  a: 1,
  b: 2,
  k: [12,4,2]
}

let obj2 = obj1;
// 새로운 object가 생성
let obj3 = JSON.parse(JSON.stringify(obj1));

// true
console.log(obj1 === obj2);
// 1
console.log(obj2.a);

obj1.a = 3;

// 3
console.log(obj2.a);
// 1 <- 복사본이기에 obj1의 변경사항은 반영되지 않음
console.log(obj3.a);
