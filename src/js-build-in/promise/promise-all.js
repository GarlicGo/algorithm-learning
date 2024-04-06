Promise.myAll = function (promises) {
  let _resolve, _reject;
  const p = new Promise((resolve, reject) => {
    _resolve = resolve;
    _reject = reject;
  });

  const results = [];
  let count = 0;
  let fulfilledCount = 0;

  // 必须使用for of才能遍历所有的iterable类型
  for (const promise of promises) {
    const i = count;
    count++;
    Promise.resolve(promise).then((data) => {
      results[i] = data;
      fulfilledCount++;
      if (fulfilledCount === count) {
        _resolve(results);
      }
    }, _reject);
  }

  if (count === 0) {
    _resolve(results);
  }

  return p;
};
