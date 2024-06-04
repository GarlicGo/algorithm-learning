import React, { useEffect, useState } from 'react';

export const SetStateTest: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(1);
      console.log('handleClick count:', count);
      setCount(2);
      console.log('handleClick count:', count);
    });
  }, []);

  const handleClick = () => {
    setCount(1);
    console.log('handleClick count:', count);
    setCount(2);
    console.log('handleClick count:', count);
  };

  console.log('render, count:', count);

  return (
    <div>
      <div>SetStateTest</div>
      <button onClick={handleClick}>count + 2</button>
    </div>
  );
};
