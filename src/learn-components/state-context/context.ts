import { createContext } from 'react';

export const data = {
  data: {
    name: 'test',
    age: 1,
  },
  fn: () => {
    console.log('fn');
  },
};

export const testContext = createContext({
  data: {},
  fn: () => {
    console.log('fn init');
  },
});
