import React from 'react';

console.log('Child Loaded');

// 纯函数

export const Child: React.FC<{
  data: string;
}> = ({ data }) => {
  console.log('Child Render');

  return <div>Child</div>;
};

console.log('Child Bottom');

// props\state
const getNumber = (a: number, b: number) => {
  return a + b;
};

const getNumberRandom = (a: number, b: number) => {
  return a + b + Math.random(); // 副作用
};
