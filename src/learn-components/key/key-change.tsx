import React, { useState } from 'react';
import { KeyChild } from './KeyChild';

export const KeyChangeExample: React.FC = () => {
  console.log('KeyChangeExample render');
  const [childKey, setChildKey] = useState(Date.now());

  return (
    <div className="example-box">
      <div>KeyChangeExample</div>
      <div>child key: {childKey}</div>
      <button onClick={() => setChildKey(Date.now())}>change child key</button>
      <KeyChild key={childKey} />
    </div>
  );
};
