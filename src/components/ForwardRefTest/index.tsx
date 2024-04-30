import React, { useEffect, useRef } from 'react';
import {
  ForwardRefTestApp,
  ForwardRefTestAppRef,
  ForwardRefTestAppRefV2,
} from './ForwardRefTestApp';
import Child from './Child';
import { ChildFn, ChildFnRef } from './ChildFn';

export const ForwardRefTest: React.FC = () => {
  const ref = useRef<{
    fn: () => void;
  }>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const childFnRef = useRef<ChildFnRef>();

  useEffect(() => {
    console.log(divRef);
    console.log(childFnRef);
  }, []);

  return (
    <div>
      {/* <ForwardRefTestApp content="内容" ref={divRef} /> */}
      <ForwardRefTestAppRef ref={ref} content="111" />
      {/* <ForwardRefTestAppRefV2 ref={buttonRef} /> */}
      {/* <Child ref={divRef} content="111" /> */}
      {/* <ChildFn ref={childFnRef} /> */}
    </div>
  );
};
