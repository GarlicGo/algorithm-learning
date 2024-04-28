import React, { useRef } from 'react';
import { ForwardRefTestApp } from './ForwardRefTestApp';

export const ForwardRefTest: React.FC = () => {
  const ref = useRef(null);

  return (
    <div ref={ref}>
      <ForwardRefTestApp content="内容" />
    </div>
  );
};
