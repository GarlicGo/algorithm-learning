import React, { forwardRef, useImperativeHandle } from 'react';

type ChildProps = {};
export type ChildFnRef = {
  fn: () => void;
};

export const ChildFn = forwardRef<ChildFnRef, ChildProps>((props, ref) => {

  useImperativeHandle(ref, () => {
    return {
      fn: () => {
        console.log('fn');
      },
    };
  });

  return <div>c</div>;
});

