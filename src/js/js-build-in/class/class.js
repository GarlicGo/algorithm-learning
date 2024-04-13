// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// Person.prototype.sayName = function () {
//   console.log(this.name);
// }

// const Student = function (name, age, grade) {
//   Person.call(this, name, age);
//   this.grade = grade;
// };

// Student.prototype = new Person();

// const newVo1d = new Student("newVo1d", 20, 100);

// newVo1d.sayName()

// function foo() {
//   console.log(this.a);
// }

// var obj2 = {
//   //   a: 42,
//   foo: foo,
// };

// // console.log(obj2); // undefined
// obj2.__proto__.a = 200;

// var obj1 = {
//   a: 2,
//   obj2: obj2,
// };

// obj1.obj2.foo(); // 42
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.testValue = 100;
// Function.prototype.testValue2 = 200;
// Object.prototype.testValue3 = 300;

// const per1 = new Person();

// console.log(per1.__proto__ === Person.prototype);
// console.log(per1.testValue3);
// console.log(Person.testValue3);

// todo: 看看箭头函数的原型

// const People = () => {}

// const Staff = function () {

// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const newVo1d = new Person("newVo1d", 20);
// const lin = new Person("lin", 22);
// const ljc = new Staff();

// console.log(newVo1d);
// console.log(lin);
// console.log(window);

// console.log(Person.prototype);
// console.log(People.prototype);
// console.log(Staff.prototype);
