import React, { useState } from 'react';
import { KeyChild } from './KeyChild';

export const KeyChangeExample: React.FC = () => {
  console.log('KeyChangeExample render');
  const [childKey, setChildKey] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="example-box">
      <div>KeyChangeExample</div>
      <div>count:{count}</div>
      <div>child key: {childKey}</div>
      <button onClick={() => setChildKey(childKey + 1)}>change child key</button>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
      <KeyChild key={childKey} />
    </div>
  );
};
