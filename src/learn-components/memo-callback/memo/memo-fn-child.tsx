import React, { useEffect } from 'react';

interface Props {
  mounted: () => void;
}

export const MemoNeedFnChild: React.FC<Props> = React.memo(({ mounted }) => {
  console.log('MemoNeedFnChild render');

  useEffect(() => {
    mounted();
  }, []);

  return <div className="example-box">MemoNeedFnChild</div>;
});
