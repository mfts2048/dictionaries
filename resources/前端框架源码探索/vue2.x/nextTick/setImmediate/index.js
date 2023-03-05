console.log(1);
setImmediate(() => {
  // 异步
  console.log(2);
});
console.log(3);
