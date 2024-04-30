import React, { useRef, useState } from 'react';

interface Props {
  styles?: React.CSSProperties;
}

export const KeyChild: React.FC<Props> = ({ styles }) => {
  console.log('KeyChild render');
  const [count, setCount] = useState(0);
  const sumRef = useRef(0);

  const handleCountClick = () => {
    setCount(count + 1);
  };

  const handleSumClick = () => {
    sumRef.current++;
  };

  return (
    <div className="example-box" style={styles}>
      <div>KeyChild</div>
      <div>count:{count}</div>
      <button onClick={handleCountClick}>count + 1</button>
      <button onClick={() => console.log(sumRef.current)}>get sum</button>
      <button onClick={handleSumClick}>sum + 1</button>
    </div>
  );
};
