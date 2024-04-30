import React, { useState } from 'react';
import { KeyListChild } from './key-list-child';

export const KeyListExample: React.FC = () => {
  const [list, setList] = useState([
    {
      id: 1,
      content: 'A',
      hidden: false,
    },
    {
      id: 2,
      content: 'B',
      hidden: false,
    },
    {
      id: 3,
      content: 'C',
      hidden: false,
    },
  ]);

  const deleteItem = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const hidden = (index: number) => {
    const newList = [...list];
    newList[index].hidden = true;
    setList(newList);
  };

  return (
    <div className="example-box">
      <div>KeyListExample</div>
      <div>list:{JSON.stringify(list)}</div>
      {list.map((item, index) => (
        <KeyListChild
          key={item.id}
          content={item.content}
          onDelete={() => deleteItem(index)}
          // styles={{
          //   // visibility: item.hidden ? 'hidden' : 'visible',
          //   display: item.hidden ? 'none' : 'block',
          // }}
        />
      ))}
    </div>
  );
};
