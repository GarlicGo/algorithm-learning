import React, { useCallback, useMemo, useState } from 'react';
import { Child, MemoChild } from './memo-child';
import { MemoNeedFnChild } from './memo-fn-child';

export const MemoExample: React.FC = () => {
  console.log('MemoExample render');
  const [count, setCount] = useState(0);

  //   const childMounted = useMemo(() => {
  //     return () => {
  //       console.log('child Mounted');
  //     }
  //   }, []);

  // const childMounted = useMemo(() => {
  //   return () => {
  //     console.log('child Mounted');
  //   };
  // }, []);

  const childMounted = useCallback(() => {
    console.log('child Mounted');
  }, []);

  return (
    <div className="example-box">
      <div>MemoExample</div>
      <div>count:{count}</div>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
      <div className="flex-row">
        {/* <Child /> */}
        {/* <MemoChild /> */}
        <MemoNeedFnChild mounted={childMounted} />
      </div>
    </div>
  );
};
