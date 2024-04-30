import React, { useState } from 'react';
import { calculate } from './fn';
import { useCalculateCount } from './hook';

export const MyHookExample: React.FC = () => {
  const { data, calculate } = useCalculateCount(0);

  return (
    <div>
      <div>MyHookExample</div>
      <div>count:{data}</div>
      <button onClick={calculate}>click</button>
    </div>
  );
};
