/* 闭包 */
class ClassB {
  constructor(x) {
    let _x = x;

    this.getX = function () {
      return _x;
    };

    this.__proto__.sayX = () => {
      console.log(_x);
    };
  }
}

let classb = new ClassB(1);
console.log(classb._x); // undefined
console.log(classb.getX()); // 1
classb.sayX()