import React from 'react';
import { UseMemo } from './memo';
import { UseMemoEffectDiff } from './memo-effect';

export const UseMemoExample: React.FC = () => {
  console.log('MemoEffectExample render');

  return (
    <div>
      <div>MemoEffectExample</div>
      <div className="flex-row">
        <UseMemo />
        <UseMemoEffectDiff />
      </div>
    </div>
  );
};
