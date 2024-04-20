import React from 'react';
import { ComponentChangeExample } from './component-change';
import { KeyChangeExample } from './key-change';
import { KeyListExample } from './key-list';

export const KeyExample: React.FC = () => {
  return (
    <div>
      <div>KeyExample</div>
      <div className="flex-row">
        <ComponentChangeExample />
        <KeyChangeExample />
        <KeyListExample />
      </div>
    </div>
  );
};
