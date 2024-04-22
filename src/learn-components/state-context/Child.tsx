import React, { useContext } from 'react';
import { testContext } from './context';

export const Child: React.FC = () => {
  const { data, fn } = useContext(testContext);

  return (
    <div className="example-box">
      <div>Child</div>
      <div>data: {JSON.stringify(data)}</div>
      <button onClick={fn}>run fn</button>
    </div>
  );
};
