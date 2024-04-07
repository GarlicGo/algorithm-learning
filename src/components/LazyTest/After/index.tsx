import React from 'react';
import { Child } from './Child';

export const After: React.FC = () => {
  console.log('After Render');

  return (
    <div>
      <div>After</div>
      <Child />
    </div>
  );
};
