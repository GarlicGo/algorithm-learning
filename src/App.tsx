import React from 'react';
import { Calendar } from './components/Calendar';
// import { runTest } from './ts/run';
// import './ts/import/run';

const App: React.FC = () => {
  console.log('App Render');
  
  return (
    <div>
      {/* <div>App</div> */}
      {/* <LazyTest /> */}
      {/* <ClosureTest /> */}
      <Calendar />
    </div>
  );
};

export default App;
