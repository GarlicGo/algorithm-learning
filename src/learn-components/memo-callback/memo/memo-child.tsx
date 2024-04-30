import React from 'react';

export const Child: React.FC = () => {
  console.log('Child render');

  return <div className="example-box">Child</div>;
};

export const MemoChild = React.memo(Child);

