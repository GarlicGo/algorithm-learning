import { useRef } from 'react';

export interface MeasuredNodeType {
  offsetHeight: number;
  height: number;
}

interface Response {
  getCacheList: () => Map<number, MeasuredNodeType>;
  getCacheNode: (index: number) => MeasuredNodeType | undefined;
  setCacheNode: (index: number, node: MeasuredNodeType) => void;
}

export const useMeasuredCache = (): Response => {
  const cache = useRef(new Map<number, MeasuredNodeType>());

  const getCacheList = () => cache.current;
  const getCacheNode = (index: number) => cache.current.get(index);
  const setCacheNode = (index: number, node: MeasuredNodeType) => {
    cache.current.set(index, node);
  };

  return {
    getCacheList,
    getCacheNode,
    setCacheNode,
  };
};
