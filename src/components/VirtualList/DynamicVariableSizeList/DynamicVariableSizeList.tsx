import React, { useState } from 'react';
import { estimatedHeight, getItemMetaData, getRangeToRender, measuredData } from './utils';
import { ListItem, ListItemV2 } from './ListItem';

export interface DynamicVariableSizeListProps {
  height: number;
  width: number;
  itemCount: number;
  cacheSize: number;
  // itemSize: (index: number) => number;
  itemEstimatedSize: number;
  children: React.FC<{ index: number; onSizeChange?: (index: number, domNode: HTMLElement) => void }>;
}

export const DynamicVariableSizeList: React.FC<DynamicVariableSizeListProps> = (props) => {
  const { height, width, itemCount, itemEstimatedSize, children: Child } = props;
  const [scrollOffset, setScrollOffset] = useState(0);
  const [, setRefreshState] = useState({});

  const contentStyle = {
    height: estimatedHeight(itemEstimatedSize, itemCount),
    width: '100%',
  };

  const sizeChangeHandle = (index: number, domNode: HTMLElement) => {

    const height = domNode.offsetHeight;
    const { measuredDataMap, lastMeasuredItemIndex } = measuredData;
    const itemMetaData = measuredDataMap[index];
    itemMetaData.size = height;
    let offset = 0;
    for (let i = 0; i <= lastMeasuredItemIndex; i++) {
      const itemMetaData = measuredDataMap[i];
      itemMetaData.offset = offset;
      offset += itemMetaData.size;
    }
    setRefreshState({});
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
      items.push(
        <ListItemV2 key={i} style={itemStyle}>
          <Child index={i} onSizeChange={sizeChangeHandle} />
        </ListItemV2>,
      );
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
