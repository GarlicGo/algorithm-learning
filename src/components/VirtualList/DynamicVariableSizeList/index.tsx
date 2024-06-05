import React from 'react';
import { DynamicVariableSizeList } from './DynamicVariableSizeList';
import { Item } from './Item';

const ITEM_COUNT = 2000;

export const DynamicVariableSizeListDemo: React.FC = () => {
  return (
    <div>
      <DynamicVariableSizeList height={665} width={250} cacheSize={4} itemCount={ITEM_COUNT} itemEstimatedSize={0}>
        {Item}
      </DynamicVariableSizeList>
    </div>
  );
};
