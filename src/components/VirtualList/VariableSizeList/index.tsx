import React from 'react';
import { VariableSizeList } from './VariableSizeList';
import { Item } from './Item';

const ITEM_COUNT = 2000;
const rowSizes = new Array(ITEM_COUNT).fill(true).map(() => 50 + Math.round(Math.random() * 80));
export const getItemSize = (index: number) => rowSizes[index];

export const VariableSizeListDemo: React.FC = () => {
  return (
    <div>
      <VariableSizeList
        height={500}
        width={200}
        cacheSize={4}
        itemCount={ITEM_COUNT}
        itemSize={getItemSize}
        itemEstimatedSize={0}
      >
        {Item}
      </VariableSizeList>
    </div>
  );
};
