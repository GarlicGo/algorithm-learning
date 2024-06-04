import React from 'react';
import './styles/index.css';
import { TransitionTest } from './components/TransitionTest';
import { SetStateTest } from './components/SetStateTest';
import { AllRender, FragmentRender } from './components/LongListRender';

const App: React.FC = () => {
  return (
    <div>
      {/* <KeyExample /> */}
      {/* <UseMemoExample /> */}
      {/* <MemoCallbackExample /> */}
      {/* <StateContextExample /> */}
      {/* <CanvasTest /> */}
      {/* <ForwardRefTest /> */}
      {/* <TransitionTest /> */}
      {/* <SetStateTest /> */}
      <FragmentRender />
      {/* <AllRender /> */}
    </div>
  );
};

export default App;
