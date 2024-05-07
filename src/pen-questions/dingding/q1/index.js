// 找出数组中重复最多的元素
// var arr = [1, 2, 3, 1, 2, 3, 4, 3, 3, 5, 3];
// a、找出数组中重复最多的数字。
// b、重复最多的数字最先开始的位置。
// c、重复最多的数字的数量。
// // a) 3
// // b) 2
// // c) 5
function findMostFrequentElement(arr) {
  // 创建一个记录元素及其出现次数和第一次出现位置的对象
  const elementMap = new Map();

  // 遍历数组，填充 map
  arr.forEach((element, index) => {
    if (!elementMap.has(element)) {
      elementMap.set(element, { count: 1, firstIndex: index });
    } else {
      elementMap.get(element).count++;
    }
  });

  // 寻找出现次数最多的元素及其详情
  let mostFrequentElement = null;
  let maxCount = 0;
  let firstIndex = 0;

  elementMap.forEach((details, element) => {
    if (details.count > maxCount) {
      mostFrequentElement = element;
      maxCount = details.count;
      firstIndex = details.firstIndex;
    }
  });

  return [mostFrequentElement, firstIndex, maxCount];
}

// 测试代码
var arr = [1, 2, 3, 1, 2, 3, 4, 3, 3, 5, 3];
const [element, firstPosition, frequency] = findMostFrequentElement(arr);
console.log(`最频繁的元素是：${element}`);
console.log(`第一次出现的位置是：${firstPosition}`);
console.log(`出现的次数是：${frequency}`);
