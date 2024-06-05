import React, { useEffect, useState } from 'react';

const waitList: any = []; //等待队列
let isRender: boolean = false; //控制渲染条件

const waitRender = () => {
  const res = waitList.shift();
  if (!res) return;
  setTimeout(() => {
    res();
  }, 500); //为演示效果加入一个延长时间
};

export type TransformHOCProps<T> = Omit<T, 'waitRender'>;

export const HOC = <T,>(Component: React.FC<T & { waitRender: () => void }>): React.FC<T> => {
  return (props) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
      waitList.push(() => {
        setShow(true);
      });
      if (!isRender) {
        waitRender();
        isRender = true;
      }
    }, []);

    if (show) {
      return <Component waitRender={waitRender} {...props} />;
    }

    return <div style={{ margin: 25 }}>加载中</div>;
  };
};
