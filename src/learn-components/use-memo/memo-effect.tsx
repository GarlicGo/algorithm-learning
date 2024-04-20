import React, { useEffect, useMemo } from 'react';

export const UseMemoEffectDiff: React.FC = () => {
  let a = 0;
  let b = 0;

  useMemo(() => {
    a++;
  }, []);

  useEffect(() => {
    b++;
  }, []);

  return (
    <div className="example-box">
      <div>MemoEffectDiff</div>
      <div>a:{a}</div>
      <div>b:{b}</div>
    </div>
  );
};
