import React, { Profiler, ProfilerOnRenderCallback, useEffect, useState } from 'react';
import { Item } from './Item';

export const AllRender: React.FC = () => {
  const [list, setList] = useState<number[]>([]);

  const handleRender: ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log('FragmentRender', { id, phase, actualDuration, baseDuration, startTime, commitTime });
  };


  return (
    <Profiler id="AllRender" onRender={handleRender}>
      <div>AllRender</div>
      <button
        onClick={async () => {
          console.time('click');
          let arr: number[] = [];
          for (let i = 0; i < 10000; i++) {
            arr.push(i);
          }
          setList(arr);
          console.timeEnd('click');
          console.log(list);
        }}
      >
        render
      </button>
      {list.map((_, index) => (
        <Item key={index} content={index} />
      ))}
    </Profiler>
  );
};
