import React, { useState } from 'react';

interface Props {
  content: string;
  onDelete: () => void;
}

export const KeyListChild: React.FC<Props> = (props) => {
  // console.log('props', props);
  const { content, onDelete } = props;
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>
        {content}: {count}
      </span>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};
