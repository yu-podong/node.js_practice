(async () => {
  console.log('step 1');
  
  await(new Promise(() => {
    console.log('step 2');
  
    setTimeout(() => {
      // exit
      resolve();
    }, 3000);
  }));

  await(new Promise(() => {
    console.log('step 3');
  
    setTimeout(() => {
      resolve();
    }, 1000);
  }));

  await(new Promise(() => {
    console.log('step 4');
  
    setTimeout(() => {
      resolve();
    }, 5000);
  }));
})();