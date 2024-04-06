const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// console.log('MyPromise.js');

class MyPromise {
  #state = PENDING;
  #result = undefined;
  #handlers = [];

  constructor(executor) {
    /**
     * 这里的 executor 是一个函数，它接收两个参数，分别是 resolve 和 reject。
     * executor 是同步执行的，当 new Promise() 时就会立即执行 executor 函数。
     * resolve 和 reject 如果绑定到原型对象，需要使用 bind 绑定 this，否则在 executor 中调用时 this 会指向 window
     * 使用 bind 还是会产生新函数，所以不如直接定义在构造函数中
     */
    const resolve = (data) => {
      this.#changeState(FULFILLED, data);
    };
    const reject = (reason) => {
      this.#changeState(REJECTED, reason);
    };

    /**
     * 这里只能捕获同步错误，同步错误会改变状态为 rejected，触发 catch
     * 产生异步错误状态不会改变，也不会触发 catch
     */
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  #changeState(state, result) {
    if (this.#state !== PENDING) return;
    this.#state = state;
    this.#result = result;
    this.#run();
  }

  #isPromiseLike(value) {
    // Promise A+ 规范中，Promise 具有互相调用的能力，不局限于某几个实现，别人实现的符合规范的 Promise 也可以调用
    if (
      value !== null &&
      (typeof value === 'object' || typeof value === 'function')
    ) {
      return typeof value.then === 'function';
    }

    return false;
  }

  #runMicroTask(callback) {
    setTimeout(callback, 0);
  }

  #runOne(callback, resolve, reject) {
    this.#runMicroTask(() => {
      if (typeof callback !== 'function') {
        const settled = this.#state === FULFILLED ? resolve : reject;
        settled(this.#result);
        return;
      }

      try {
        const data = callback(this.#result);

        if (this.#isPromiseLike(data)) {
          data.then(resolve, reject);
        } else {
          resolve(data);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  #run() {
    if (this.#state === PENDING) return;
    while (this.#handlers.length) {
      const { onFulfilled, onRejected, resolve, reject } =
        this.#handlers.shift();

      if (this.#state === FULFILLED) {
        this.#runOne(onFulfilled, resolve, reject);
      } else if (this.#state === REJECTED) {
        this.#runOne(onRejected, resolve, reject);
      }
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#handlers.push({
        onFulfilled: onFulfilled,
        onRejected: onRejected,
        resolve: resolve,
        reject: reject,
      });
      this.#run();
    });
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 1000);
});

p.then((data) => {
  console.log('then', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('success2');
    }, 1000);
  });
}).then((data) => {
  console.log('then2', data);
});
