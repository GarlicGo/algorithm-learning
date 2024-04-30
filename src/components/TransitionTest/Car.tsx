import React, { useRef, useState } from 'react';
import { CarContainer } from './styles';

type Target = {
  position: [number, number];
  duration: number;
};

const PositionList: Target[] = [
  {
    position: [200, 0],
    duration: 2500,
  },
  {
    position: [550, 0],
    duration: 2500,
  },
  //   {
  //     position: [200, 200],
  //     duration: 3200,
  //   },
  //   {
  //     position: [200, 400],
  //     duration: 2000,
  //   },
];

export const Car: React.FC = () => {
  const firstRenderTimeRef = useRef(Date.now());
  const countRef = useRef(0);
  const [target, setTarget] = useState<Target>();

  const handleClick = () => {
    const startTime = Date.now();
    const clickFromFirstRender = startTime - firstRenderTimeRef.current;

    const next = PositionList.shift();
    console.log(next);

    const currentCount = countRef.current;
    countRef.current++;

    if (next) {
      setTarget(next);
      console.log(
        `第${currentCount}次移动开始, 距离首次渲染${clickFromFirstRender}ms时触发`,
      );

      setTimeout(() => {
        const endTime = Date.now();
        const setTimeoutDuration = endTime - startTime;
        const setTimeoutFromFirstRender = endTime - firstRenderTimeRef.current;

        console.log(
          `第${currentCount}次移动完成, 用时:${setTimeoutDuration}ms, 距离首次渲染${setTimeoutFromFirstRender}ms时完成`,
        );
      }, next.duration);
    }
  };

  return (
    <CarContainer
      style={{
        left: `${target?.position[0] ?? 0}px`,
        top: `${target?.position[1] ?? 0}px`,
        transitionDuration: `${target?.duration}ms`,
      }}
    >
      <div>Car</div>
      <button onClick={handleClick}>move</button>
    </CarContainer>
  );
};
