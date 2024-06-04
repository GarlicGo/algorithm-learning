import React, { Profiler, ProfilerOnRenderCallback, useState } from 'react';
import { ItemHoc } from './Item';

export const FragmentRender: React.FC = () => {
  const [list, setList] = useState<number[]>([]);

  const handleRender: ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log('FragmentRender', { id, phase, actualDuration, baseDuration, startTime, commitTime });
  };

  return (
    <Profiler id="FragmentRender" onRender={handleRender}>
      <div>FragmentRender</div>
      <button
        onClick={() => {
          const arr: number[] = Array.from({ length: 10000 }).map((_, index) => index);
          setList(arr);
        }}
      >
        render
      </button>
      {list.map((_, index) => (
        <ItemHoc key={index} content={index} />
      ))}
    </Profiler>
  );
};
