import React from 'react';

interface Props {
  count: number;
}

export const ComponentTest: React.FC<Props> = ({ count }) => {
  console.log('ComponentTest Render');

  return (
    <div key="1-1" className="c1">
      <div key="2-1">
        <p key="3-1">ComponentTest</p>
      </div>
      <div className="c2">{count}</div>
      <h1 key="2-2">2</h1>
    </div>
  );
};
