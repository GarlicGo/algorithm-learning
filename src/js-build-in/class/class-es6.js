class Person {
  #name = 'me';
  #age = 10;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  static personGroupNumber = 10;

  personNumber = 100;

  sayName() {
    console.log(this.name);
  }
}

const per1 = new Person('newVo1d1', 20);
const per2 = new Person('newVo1d2', 202);
console.log(per1);
console.log(per2);

const classD = (function () {
  const _x = Symbol('x');
  class ClassD {
    constructor(x) {
      this[_x] = x;
    }
    getX() {
      return this[_x];
    }
  }
  return ClassD;
})();

// class ClassB {
//   // private _x = 0;

//   constructor(x) {
//     let _x = x;
//     this.getX = function(){
//       return _x;
//     }
//   }

//   sayX(){
//     // console.log(_x);
//     console.log(this._x);
//     console.log(this.getX());
//   }
// }

const per3 = new ClassB(100);


// class Staff {
//   constructor() {}

//   hello() {
//     console.log('Staff hello');
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }
// }

// const newVo1d = new Student('newVo1d', 20, 100);
// console.log(newVo1d);
// console.log(newVo1d.personGroupNumber);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.personGroupNumber = 10;
// Person.prototype.sayName = function(){
//     console.log(this.name);
// }
// Person.prototype.personNumber = 100;

// const me = new Person("newVo1d", 20);

// // console.log('1');
// console.log(me);
// console.log(me.personGroupNumber);
// console.log(me.__proto__.constructor.personGroupNumber);
