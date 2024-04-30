import React, { useState } from 'react';
import { KeyChild } from './KeyChild';

export const ComponentChangeExample: React.FC = () => {
  console.log('ComponentChangeExample render');
  const [display, setDisplay] = useState(true);

  return (
    <div className="example-box">
      <div>ComponentChangeExample</div>
      <div>display: {display.toString()}</div>
      <button onClick={() => setDisplay(!display)}>change display</button>
      {display && <KeyChild />}
      {/* <KeyChild
        styles={{
          // visibility: display ? 'visible' : 'hidden',
          // display: display ? 'block' : 'none',
        }}
      /> */}
    </div>
  );
};
