import React from 'react';
import FixedSizeList from './FixedSizeList';
import { Item } from './Item';

export const FixedSizeListDemo: React.FC = () => {
  return (
    <FixedSizeList height={500} width={200} cacheSize={10} itemSize={50} itemCount={50000}>
      {Item}
    </FixedSizeList>
  );
};
