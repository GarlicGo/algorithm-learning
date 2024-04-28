import React from 'react';
import './styles/index.css';
import { ForwardRefTest } from './components/ForwardRefTest';

const App: React.FC = () => {
  return (
    <div>
      {/* <KeyExample /> */}
      {/* <UseMemoExample /> */}
      {/* <MemoCallbackExample /> */}
      {/* <StateContextExample /> */}
      {/* <CanvasTest /> */}
      <ForwardRefTest />
    </div>
  );
};

export default App;
