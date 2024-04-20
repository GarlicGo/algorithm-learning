import React from 'react';
import './styles/index.css';
import { MemoCallbackExample } from './learn-components/memo-callback';
import { UseMemoExample } from './learn-components/use-memo';
import { KeyExample } from './learn-components/key';

const App: React.FC = () => {
  return (
    <div>
      {/* <KeyExample /> */}
      {/* <UseMemoExample /> */}
      <MemoCallbackExample />
    </div>
  );
};

export default App;
