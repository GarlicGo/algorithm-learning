import React, { CSSProperties, ReactNode, useState } from 'react';

interface Props {
  height: number;
  width: number;
  cacheSize?: number;
  itemSize: number;
  itemCount: number;
  children: React.FC<{ index: number; style: CSSProperties }>;
}

const FixedSizeList: React.FC<Props> = (props) => {
  const { height, width, itemSize, itemCount, cacheSize = 2, children: Child } = props;
  // 记录滚动掉的高度
  const [scrollOffset, setScrollOffset] = useState(0);

  // itemCount 个元素撑起盒子的实际高度
  const contentStyle = {
    height: itemSize * itemCount,
    width: '100%',
  };

  const getCurrentChildren = () => {
    // 可视区起始索引(向下取整)
    const startIndex = Math.floor(scrollOffset / itemSize);
    // 上缓冲区起始索引
    const finialStartIndex = Math.max(0, startIndex - cacheSize);
    // 可视区能展示的元素的最大个数(向上取整)
    const numVisible = Math.ceil(height / itemSize);
    // 下缓冲区结束索引
    const endIndex = Math.min(itemCount, startIndex + numVisible + cacheSize);
    const items: ReactNode[] = [];
    // 根据上面计算的索引值，不断添加元素给container
    for (let i = finialStartIndex; i < endIndex; i++) {
      const itemStyle: CSSProperties = {
        position: 'absolute',
        height: itemSize,
        width: '100%',
        // 计算每个元素在container中的top值
        top: itemSize * i,
      };
      Child && items.push(<Child key={i} index={i} style={itemStyle} />);
    }
    return items;
  };

  // 当触发滚动就重新计算
  const scrollHandle: React.UIEventHandler<HTMLDivElement> = (event) => {
    const { scrollTop } = event.currentTarget;
    setScrollOffset(scrollTop);
  };

  return (
    <div
      style={{
        // 外部容器的样式
        position: 'relative',
        width,
        height,
        overflow: 'auto',
      }}
      onScroll={scrollHandle}
    >
      <div style={contentStyle}>{getCurrentChildren()}</div>
    </div>
  );
};

export default FixedSizeList;
