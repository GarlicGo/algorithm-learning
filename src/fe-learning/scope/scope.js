console.log('scope.js');
let g_scope = 1;
var g_var = 1;

function fn() {
  let a = 1;
  console.log('fn');
}

const arrFn = () => {
  var c = 10;
  let b = 1;
  console.log(this);
  console.log('arrFn');
};

console.log('info');

fn();
arrFn();
