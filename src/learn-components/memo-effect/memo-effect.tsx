import React, { useEffect, useMemo } from 'react';

export const MemoEffectDiff: React.FC = () => {
  let a = 0;
  let b = 0;

  useMemo(() => {
    a++;
  }, []);

  useEffect(() => {
    b++;
  }, []);

  return (
    <div>
      <div>MemoEffectDiff</div>
      <div>a:{a}</div>
      <div>b:{b}</div>
    </div>
  );
};
