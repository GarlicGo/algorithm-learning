const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 1000);
});

const p2 = Promise.reject(p);
console.log(p);
console.log(p2);


// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//   }, 1000);
// });

// p.then((data) => {
//   console.log('pre then', data);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('success2');
//     }, 1000);
//   });
// //   return 'aaa';
// }).then((data) => {
//   console.log('then2', data);
// });
