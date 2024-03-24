import { useState, MutableRefObject } from 'react';

export const useMyRefByState = <T>(initialValue: T): MutableRefObject<T> => {
  const [state] = useState({
    current: initialValue,
  });

  return state;
};
