import React from 'react';
import './styles/index.css';
import { TransitionTest } from './components/TransitionTest';
import { SetStateTest } from './components/SetStateTest';
import { AllRender, FragmentRender } from './components/LongListRender';
import { DynamicVariableSizeListDemo, FixedSizeListDemo, MineScrollListDemo } from './components/VirtualList';
import { VariableSizeListDemo } from './components/VirtualList/VariableSizeList';

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
      {/* <FragmentRender /> */}
      {/* <AllRender /> */}
      {/* <FixedSizeListDemo /> */}
      {/* <VariableSizeListDemo /> */}
      {/* <DynamicVariableSizeListDemo /> */}
      <MineScrollListDemo />
    </div>
  );
};

export default App;

// [object Object]
