import React, { useState } from 'react';
import { Child } from './Child';

export const ComponentPropsExample: React.FC = () => {
  return (
    <div>
      <div>ComponentPropsExample</div>
      <Child data="xxxxx">
        <div>child inner 111</div>
      </Child>
    </div>
  );
};
