// console.log('run.ts');

// 静态加载
// import fn from './package';;
// fn();

// 动态加载
const importTest = () => {
  import('./ComponentTest').then((module) => {
    console.log('then', module);
    console.log(module.ComponentTest);
    console.log(module.ComponentTest({ count: 1 }));
    return;
  });
};

importTest();
