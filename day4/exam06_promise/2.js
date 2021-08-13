console.log('step1');
/*
setTimeout(() => {
  console.log('step2');

  setTimeout(() => {
    console.log('step3');

    setTimeout(() => {
      console.log('step4');
    }, 500);
  }, 1000);

}, 3000);
*/

// waterfall
new Promise(() => {
  console.log('step 2');

  setTimeout(() => {
    resolve();
  }, 3000);
})
.then(() => {
  return new Promise((resolve) => {
    console.log('step 4');
    setTimeout(() => {
      resolve();
    }, 500);
  })
})
.then(() => {
  return new Promise((resolve) => {
    console.log('step 4');
    setTimeout(() => {
      resolve();
    }, 500);
  })
});
