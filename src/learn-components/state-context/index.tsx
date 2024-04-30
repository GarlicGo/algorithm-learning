import React, { useContext, useState } from 'react';
import { testContext } from './context';
import { Child } from './Child';
import { Child2 } from './Child2';

export const StateContextExample: React.FC = () => {
  const { data: contextData, fn } = useContext(testContext);

  const [count, setCount] = useState(0);

  return (
    <testContext.Provider
      value={{
        data: count,
        fn: () => {
          console.log('fn');
        },
      }}
    >
      <div>StateContextExample</div>
      <button
        onClick={() => {
          fn();
          console.log('data:', contextData);
        }}
      >
        run fn & get data
      </button>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
      <div className="flex-row">
        <Child />
        <Child2 count={count} onClick={() => setCount(count + 1)} />
      </div>
    </testContext.Provider>
  );
};
