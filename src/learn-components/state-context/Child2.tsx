import React, { useState } from 'react';
import { testContext } from './context';

interface Props {
  count: number;
  onClick?: () => void;
}

export const Child2: React.FC<Props> = ({ count, onClick }) => {
  // const [count, setCount] = useState(0);

  return (
    <div className="example-box">
      <div>Child2</div>
      <div>count: {count}</div>
      <button onClick={onClick}>count + 1</button>
    </div>
  );
};
