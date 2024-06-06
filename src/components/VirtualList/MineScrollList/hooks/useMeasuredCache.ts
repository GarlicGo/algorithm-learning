import { useRef } from 'react';

const MeasuredCacheConstant = {
  MarginTop: 10,
  ESTIMATED_HEIGHT: 110,
  CACHE_ITEM_SIZE: 2,
};

export interface MeasuredNodeType {
  offsetHeight: number;
  height: number;
}

type MeasuredNodeList = (MeasuredNodeType | undefined)[];

interface Response {
  /**
   * 获取缓存列表
   */
  getCacheList: () => MeasuredNodeList;
  /**
   * 获取缓存节点
   */
  getCacheNode: (index: number) => MeasuredNodeList[number];
  /**
   * 设置缓存节点
   */
  setCacheNode: (index: number, node: MeasuredNodeType) => void;
  /**
   * 移除缓存节点
   */
  removeCacheNode: (index: number) => void;
  /**
   * 计算某个节点的 offsetHeight
   */
  calculateOffsetHeight: (index: number) => number;
  /**
   * 获取内容高度
   */
  getContentHeight: () => number;
  /**
   * 获取渲染区间
   */
  getRenderRange: (scrollTop: number, clientHeight: number, itemCount: number) => { startIndex: number; endIndex: number };
}

export const useMeasuredCache = (): Response => {
  const cache = useRef<MeasuredNodeList>([]);

  const updateCacheList = (length: number) => {
    let offsetHeight = MeasuredCacheConstant.MarginTop;
    for (let i = 0; i < length; i++) {
      const node = cache.current[i];
      if (node) {
        node.offsetHeight = offsetHeight;
        offsetHeight += node.height + MeasuredCacheConstant.MarginTop;
      } else {
        cache.current[i] = {
          offsetHeight,
          height: MeasuredCacheConstant.ESTIMATED_HEIGHT,
        };
        offsetHeight += MeasuredCacheConstant.ESTIMATED_HEIGHT + MeasuredCacheConstant.MarginTop;
      }
    }
  };

  const getCacheList = () => cache.current;
  const getCacheNode = (index: number) => cache.current[index];
  const setCacheNode = (index: number, node: MeasuredNodeType) => {
    cache.current[index] = node;
    updateCacheList(cache.current.length);
  };
  const removeCacheNode = (index: number) => {
    cache.current[index] = undefined;
  };

  const calculateOffsetHeight = (index: number) => {
    let offsetHeight = MeasuredCacheConstant.MarginTop;
    cache.current.forEach((node, key) => {
      if (key < index) {
        const nodeHeight = node?.height || MeasuredCacheConstant.ESTIMATED_HEIGHT;
        offsetHeight += nodeHeight + MeasuredCacheConstant.MarginTop;
      }
    });
    return offsetHeight;
  };

  const getContentHeight = () => {
    let height = calculateOffsetHeight(cache.current.length);
    return height;
  };

  const getStartIndex = (scrollTop: number) => {
    // 计算的是第一个完整显示在可视区域的节点
    let offsetHeight = MeasuredCacheConstant.MarginTop;
    let index = 0;
    while (offsetHeight < scrollTop) {
      const node = cache.current[index];
      const nodeHeight = node?.height || MeasuredCacheConstant.ESTIMATED_HEIGHT;
      offsetHeight += nodeHeight + MeasuredCacheConstant.MarginTop;
      index++;
    }
    return index;
  };

  const getEndIndex = (startIndex: number, clientHeight: number) => {
    // 计算的是第一个完全不显示在可视区域的节点
    let offsetHeight = MeasuredCacheConstant.MarginTop;
    let index = startIndex;
    while (offsetHeight < clientHeight) {
      const node = cache.current[index];
      const nodeHeight = node?.height || MeasuredCacheConstant.ESTIMATED_HEIGHT;
      offsetHeight += nodeHeight + MeasuredCacheConstant.MarginTop;
      index++;
    }
    return index;
  };

  const getRenderRange = (scrollTop: number, clientHeight: number, itemCount: number) => {
    const startIndex = getStartIndex(scrollTop);
    const endIndex = getEndIndex(startIndex, clientHeight);
    return {
      startIndex: Math.max(0, startIndex - MeasuredCacheConstant.CACHE_ITEM_SIZE),
      endIndex: Math.min(endIndex + MeasuredCacheConstant.CACHE_ITEM_SIZE, itemCount),
    };
  };

  return {
    getCacheList,
    getCacheNode,
    setCacheNode,
    removeCacheNode,
    calculateOffsetHeight,
    getContentHeight,
    getRenderRange,
  };
};
