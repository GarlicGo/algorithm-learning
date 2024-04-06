console.log('for.js');

const obj = { a: 1, b: 2, c: 3 };

const arr = [1, 2, 3];

for (const key in obj) {
  console.log(key);
}

for (const value of arr) {
  console.log(value);
}
