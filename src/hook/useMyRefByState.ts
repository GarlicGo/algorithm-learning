import React, { useState } from 'react';

export const useMyRefByState = <T>(
  initialValue: T,
): React.MutableRefObject<T> => {
  const [state] = useState({
    current: initialValue,
  });

  return state;
};
