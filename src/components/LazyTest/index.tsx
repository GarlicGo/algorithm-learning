import React, { Suspense, lazy } from 'react';

function delayForDemo(promise: Promise<any>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const LazyContent = lazy(() => {
  console.log('lazy');
  return delayForDemo(import('./Content'));
});

export const LazyTest: React.FC = () => {
  console.log('LazyTest Render');

  return (
    <div>
      <div>LazyTest</div>
      {/* <LazyContent /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyContent />
      </Suspense>
      {/* <Pre /> */}
      {/* <LazyContent /> */}
      {/* <After /> */}
    </div>
  );
};
