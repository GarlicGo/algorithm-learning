import React from 'react';
import { MemoExample } from './memo';

export const MemoCallbackExample: React.FC = () => {
  return (
    <div>
      <div>MemoCallbackExample</div>
      <div className="flex-row">
        <MemoExample />
      </div>
    </div>
  );
};
