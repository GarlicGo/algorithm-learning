import { createContext } from 'react';

export const testContext = createContext({
  data: 0,
  fn: () => {
    console.log('fn init');
  },
});
