import React from 'react';
import './styles/index.css';
import { MemoCallbackExample } from './learn-components/memo-callback';
import { UseMemoExample } from './learn-components/use-memo';
import { KeyExample } from './learn-components/key';
import { StateContextExample } from './learn-components/state-context';
import { CanvasTest } from './Canvas';

const App: React.FC = () => {
  return (
    <div>
      {/* <KeyExample /> */}
      {/* <UseMemoExample /> */}
      {/* <MemoCallbackExample /> */}
      {/* <StateContextExample /> */}
      <CanvasTest />
    </div>
  );
};

export default App;
