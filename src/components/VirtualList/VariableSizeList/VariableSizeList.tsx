import React, { useState } from 'react';
import { estimatedHeight, getItemMetaData, getRangeToRender } from './utils';
// import {} from './utils';

export interface VariableSizeListProps {
  height: number;
  width: number;
  itemCount: number;
  cacheSize: number;
  itemSize: (index: number) => number;
  itemEstimatedSize: number;
  children: React.FC<{ index: number; style: React.CSSProperties }>;
}

export const VariableSizeList: React.FC<VariableSizeListProps> = (props) => {
  const { height, width, itemCount, itemEstimatedSize, children: Child } = props;
  const [scrollOffset, setScrollOffset] = useState(0);

  const contentStyle = {
    height: estimatedHeight(itemEstimatedSize, itemCount),
    width: '100%',
  };

  const getCurrentChildren = () => {
    const [startIndex, endIndex] = getRangeToRender(props, scrollOffset);
    const items = [];
    for (let i = startIndex; i <= endIndex; i++) {
      const item = getItemMetaData(props, i);
      const itemStyle = {
        position: 'absolute',
        height: item.size,
        width: '100%',
        top: item.offset,
      } as const;
      items.push(<Child key={i} index={i} style={itemStyle} />);
    }
    return items;
  };

  const scrollHandle: React.UIEventHandler<HTMLDivElement> = (event) => {
    const { scrollTop } = event.currentTarget;
    setScrollOffset(scrollTop);
  };

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        overflow: 'auto',
        willChange: 'transform',
      }}
      onScroll={scrollHandle}
    >
      <div style={contentStyle}>{getCurrentChildren()}</div>
    </div>
  );
};
