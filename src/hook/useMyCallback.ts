import React, { useMemo } from 'react';

export const useMyCallback = (
  callback: () => void,
  deps: React.DependencyList,
) => {
  return useMemo(() => callback, deps);
};
