import React, { useEffect, useState } from 'react';
import { Child } from './Child';
import { render } from 'react-dom';

let i = 0;

console.log('TestComponent Loaded');

const stateList = [1, 'info', 'name'];

export const TestComponent = () => {
  // hook规则, 不能在条件语句中使用hook
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState('info');
  const [name, setName] = useState('name');

  const handleCountClick = () => {
    setCount(count + 1);
    i++;
  };

  return (
    <div>
      <div>TestComponent</div>
      <div>count:{count}</div>
      {/* <div>info:{info ?? ''}</div> */}
      <div>name:{name}</div>
      <button onClick={handleCountClick}>count + 1</button>
      <Child data="1" />
    </div>
  );
};

console.log('TestComponent Bottom');
