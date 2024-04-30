import { useState } from 'react';

export const useCalculateCount = (init: number) => {
  const [count, setCount] = useState(init);

  const calculate = () => {
    let temp = count + 1;
    temp = temp * 2;
    temp = temp ** 2;
    setCount(temp);
  };

  return {
    data: count,
    calculate,
  };
};
