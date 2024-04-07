import React from 'react';
import { LazyTest } from './components/LazyTest';
// import { runTest } from './ts/run';
// import './ts/import/run';

const App: React.FC = () => {
  console.log('App Render');
  
  return (
    <div>
      <div>App</div>
      <LazyTest />
      {/* <ClosureTest /> */}
    </div>
  );
};

export default App;
