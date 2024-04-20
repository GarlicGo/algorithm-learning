import React, { useState } from 'react';
import { KeyListChild } from './key-list-child';

export const KeyListExample: React.FC = () => {
  const [list, setList] = useState([
    {
      id: 1,
      content: 'A',
    },
    {
      id: 2,
      content: 'B',
    },
    {
      id: 3,
      content: 'C',
    },
  ]);

  const deleteItem = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div className="example-box">
      <div>KeyListExample</div>
      <div>list:{JSON.stringify(list)}</div>
      {list.map((item, index) => (
        <KeyListChild
          key={index}
          content={item.content}
          onDelete={() => deleteItem(index)}
        />
      ))}
    </div>
  );
};
