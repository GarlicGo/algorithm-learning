import React, { forwardRef } from 'react';

type ChildProps = {
  content?: string;
};
type ChildRef = HTMLDivElement;

const Child = forwardRef<ChildRef, ChildProps>((props, ref) => {
  return (
    <div ref={ref}>
      <div>Child</div>
      <div>{props.content}</div>
    </div>
  );
});

export default Child;
