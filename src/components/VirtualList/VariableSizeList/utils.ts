import { VariableSizeListProps } from './VariableSizeList';

type MeasuredDataItem = {
  size: number;
  offset: number;
};

// // 元数据
const measuredData: {
  measuredDataMap: { [key: string]: MeasuredDataItem };
  LastMeasuredItemIndex: number;
} = {
  measuredDataMap: {},
  LastMeasuredItemIndex: -1,
};

export const estimatedHeight = (defaultEstimatedItemSize: number = 50, itemCount: number) => {
  let measuredHeight = 0;
  const { measuredDataMap, LastMeasuredItemIndex } = measuredData;
  // 计算已经获取过真实高度的项的高度之和
  if (LastMeasuredItemIndex >= 0) {
    const lastMeasuredItem = measuredDataMap[LastMeasuredItemIndex];
    measuredHeight = lastMeasuredItem.offset + lastMeasuredItem.size;
  }
  // 未计算过真实高度的项数
  const unMeasuredItemsCount = itemCount - measuredData.LastMeasuredItemIndex - 1;
  // 预测总高度
  const totalEstimatedHeight = measuredHeight + unMeasuredItemsCount * defaultEstimatedItemSize;
  return totalEstimatedHeight;
};

export const getItemMetaData = (props: VariableSizeListProps, index: number): MeasuredDataItem => {
  const { itemSize } = props;
  const { measuredDataMap, LastMeasuredItemIndex } = measuredData;
  // 如果当前索引比已记录的索引要大，说明要计算当前索引的项的size和offset
  if (index > LastMeasuredItemIndex) {
    let offset = 0;
    // 计算当前能计算出来的最大offset值
    if (LastMeasuredItemIndex >= 0) {
      const lastMeasuredItem = measuredDataMap[LastMeasuredItemIndex];
      offset += lastMeasuredItem.offset + lastMeasuredItem.size;
    }
    // 计算直到index为止，所有未计算过的项
    for (let i = LastMeasuredItemIndex + 1; i <= index; i++) {
      const currentItemSize = itemSize(i);
      measuredDataMap[i] = { size: currentItemSize, offset };
      offset += currentItemSize;
    }
    // 更新已计算的项的索引值
    measuredData.LastMeasuredItemIndex = index;
  }
  return measuredDataMap[index];
};

const getStartIndex = (props: VariableSizeListProps, scrollOffset: number) => {
  const { itemCount } = props;
  let index = 0;
  while (true) {
    const currentOffset = getItemMetaData(props, index).offset;
    if (currentOffset >= scrollOffset) return index;
    if (index >= itemCount) return itemCount;
    index++;
  }
};

const getEndIndex = (props: VariableSizeListProps, startIndex: number) => {
  const { height, itemCount } = props;
  // 获取可视区内开始的项
  const startItem = getItemMetaData(props, startIndex);
  // 可视区内最大的offset值
  const maxOffset = startItem.offset + height;
  // 开始项的下一项的offset，之后不断累加此offset，直到等于或超过最大offset，就是找到结束索引了
  let offset = startItem.offset + startItem.size;
  // 结束索引
  let endIndex = startIndex;
  // 累加offset
  while (offset <= maxOffset && endIndex < itemCount - 1) {
    endIndex++;
    const currentItem = getItemMetaData(props, endIndex);
    offset += currentItem.size;
  }
  return endIndex;
};

export const getRangeToRender = (props: VariableSizeListProps, scrollOffset: number): [number, number, number, number] => {
  const { itemCount, cacheSize } = props;
  const startIndex = getStartIndex(props, scrollOffset);
  const endIndex = getEndIndex(props, startIndex);
  return [Math.max(0, startIndex - cacheSize), Math.min(itemCount - 1, endIndex + cacheSize), startIndex, endIndex];
};
