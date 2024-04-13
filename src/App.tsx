import React from 'react';
import { ErrorBoundaryTestDemo } from './components/ErrorBoundary';
// import { runTest } from './ts/run';
// import './ts/import/run';

const App: React.FC = () => {
  console.log('App Render');

  return (
    <div>
      {/* <div>App</div> */}
      {/* <LazyTest /> */}
      {/* <ClosureTest /> */}
      {/* <Calendar /> */}
      <ErrorBoundaryTestDemo />
    </div>
  );
};

export default App;
