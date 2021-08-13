// 
new Promise((resolve) => {
  console.log('step 1');
  
  // 비동기적인 상황에서 다음 logic으로 넘어가기 전에 해당 과정이 꼭 선행되어야할 때
  setTimeout(() => {
    console.log('step 2');
    resolve();
  }, 1000);
})
.then(() => {
  console.log('step 3');
});

console.log('step 4');

// delay(1000);
// console.log('step 2');



