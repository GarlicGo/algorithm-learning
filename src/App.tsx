import React from 'react';
import './styles/index.css';
import { TransitionTest } from './components/TransitionTest';

const App: React.FC = () => {
  return (
    <div>
      {/* <KeyExample /> */}
      {/* <UseMemoExample /> */}
      {/* <MemoCallbackExample /> */}
      {/* <StateContextExample /> */}
      {/* <CanvasTest /> */}
      {/* <ForwardRefTest /> */}
      <TransitionTest />
    </div>
  );
};

export default App;
