import { useState } from 'react';
import { debounce } from 'lodash';

export const useRefresh = () => {
  const [_, setRefresh] = useState({});

  return debounce(() => {
    // console.log('fresh');

    setRefresh({});
  }, 50);
};
