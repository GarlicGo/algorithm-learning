import React, { useMemo } from 'react';

export const UseMemo: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const [sum, setSum] = React.useState(0);

  const countDouble = useMemo(() => {
    console.log('countDouble run');
    return count * 2;
  }, [count]);

  return (
    <div className="example-box">
      <div>MemoExample</div>
      <div>count:{count}</div>
      <div>sum:{sum}</div>
      <div>count double:{countDouble}</div>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
      <button onClick={() => setSum(sum + 1)}>sum + 1</button>
    </div>
  );
};
