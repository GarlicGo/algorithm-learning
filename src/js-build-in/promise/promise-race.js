Promise.myRace = function (promises) {
  //判断对象是否可迭代
  const isIterable = (obj) => {
    return obj != null && typeof obj[Symbol.iterator] === 'function';
  };

  return new Promise((resolve, reject) => {
    if (!isIterable(promiseArray)) {
      //判断一下传入的参数是否可迭代
      let type = typeof promiseArray;
      return reject(new TypeError(`${type} is not iterable`));
    }

    for (const item of promises) {
      Promise.resolve(item).then(resolve, reject);
    }
  });
};
