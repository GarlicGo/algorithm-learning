import React, { useEffect, useRef, useState } from 'react';

export const ClosureTest: React.FC = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  //  闭包缺陷
  // useEffect(() => {
  //   console.log('ClosureTest useEffect');
  //   const timer = setInterval(() => {
  //     console.log('setInterval:', count);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  //  闭包缺陷的解决方案1
  // useEffect(() => {
  //   console.log('ClosureTest useEffect');
  //   const timer = setInterval(() => {
  //     console.log('setInterval:', count);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [count]);

  //  闭包缺陷的解决方案2
    useEffect(() => {
      console.log('ClosureTest useEffect');
      const timer = setInterval(() => {
        console.log('setInterval:', countRef.current);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }, []);

  const handleClick = () => {
    setCount(count + 1);
    countRef.current += 1;
  };

  return (
    <div>
      <div>ClosureTest</div>
      <div>ClosureTest count: {count}</div>
      <button onClick={handleClick}>ClosureTest count +1</button>
    </div>
  );
};
