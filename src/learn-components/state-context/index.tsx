import React, { useContext } from 'react';
import { testContext, data } from './context';
import { Child } from './Child';

export const StateContextExample: React.FC = () => {
  const { fn } = useContext(testContext);

  return (
    <testContext.Provider value={data}>
      <div>StateContextExample</div>
      <button onClick={fn}>run fn</button>
      <Child />
    </testContext.Provider>
  );
};
