// import React, { useRef, useState } from 'react';
// import { Child } from './Child';

// console.log('TestComponent Loaded');

// export const TestComponent: React.FC = () => {
//   console.log('TestComponent Render');
//   let a = 0;

//   const [count, setCount] = useState(0);
//   const numRef = useRef(null);

//   const handleCountClick = () => {
//     setCount(count + 1);
//   };

//   const handleReturnClick = () => {
//     console.log(Child({ data: '1' }));
//   };

//   return (
//     <div ref={numRef}>
//       <div>TestComponent, count:{count}</div>
//       <div>a:{a}</div>
//       <button
//         onClick={() => {
//           a = a + 1;
//           // numRef.current++;
//         }}
//       >
//         a + 1
//       </button>
//       <button
//         onClick={() => {
//           console.log('a', a);
//           console.log('numRef', numRef.current);
//         }}
//       >
//         log a
//       </button>
//       <button onClick={handleCountClick}>count + 1</button>
//       <button onClick={handleReturnClick}>Look Child Return</button>
//       <Child data="1" />
//     </div>
//   );
// };

// console.log('TestComponent Bottom');
