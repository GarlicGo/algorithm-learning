import React from 'react';
import { TestComponent } from './components/TestComponent';
import { ClosureTest } from './components/ClosureTest';

console.log('App Loaded');

const App: React.FC = () => {
  console.log('App Render');

  return (
    <div>
      <TestComponent />
      {/* <ClosureTest /> */}
    </div>
  );
};

console.log('App Bottom');

export default App;
