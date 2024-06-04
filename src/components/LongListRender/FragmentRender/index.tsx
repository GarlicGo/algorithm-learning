import React, { Profiler, ProfilerOnRenderCallback } from 'react';
import { ItemHoc } from './Item';

export const FragmentRender: React.FC = () => {
  const handleRender: ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log('FragmentRender', { id, phase, actualDuration, baseDuration, startTime, commitTime });
  };

  return (
    <Profiler id="FragmentRender" onRender={handleRender}>
      <div>FragmentRender</div>
      {Array.from({ length: 5000 }).map((_, index) => (
        <ItemHoc key={index} content={index} />
      ))}
    </Profiler>
  );
};
