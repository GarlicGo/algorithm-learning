const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

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
    // 把任务放到微任务队列中
    if (typeof process === 'object' && typeof process.nextTick === 'function') {
      // Node.js 环境
      process.nextTick(callback);
    } else if (typeof MutationObserver === 'function') {
      // 浏览器环境
      const ob = new MutationObserver(callback);
      const textNode = document.createTextNode('');
      ob.observe(textNode, {
        characterData: true,
      });
      textNode.data = 'a';
    } else {
      // 其他环境，脱离了环境没办法了
      setTimeout(callback, 0);
    }
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
          this.#runMicroTask(() => {
            data.then(resolve, reject);
          });
        } else {
          resolve(data);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  #run() {
    // console.log('run');
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
    const p = new MyPromise((resolve, reject) => {
      this.#handlers.push({
        onFulfilled: onFulfilled,
        onRejected: onRejected,
        resolve: resolve,
        reject: reject,
      });
      this.#run();
    });

    return p;
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (data) => {
        onFinally();
        return data;
      },
      (reason) => {
        onFinally();
        throw reason;
      },
    );
  }

  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    }

    let _resolve, _reject;

    const p = new MyPromise((resolve, reject) => {
      _resolve = resolve;
      _reject = reject;
    });

    if (p.#isPromiseLike(value)) {
      value.then(_resolve, _reject);
    } else {
      _resolve(value);
    }

    return p;
  }

  static reject(reason) {
    return new MyPromise((_, reject) => {
      reject(reason);
    });
  }
}

// console.log(Promise.resolve());
// console.log(MyPromise.resolve());

// setTimeout(() => {
//   console.log(1);
// }, 0);

// new MyPromise((resolve) => {
//   console.log(2);
//   resolve(3);
// }).then((data) => {
//   console.log(data);
// });

// console.log(4);

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success-1');
  }, 1000);
});

p.then((data) => {
  console.log('then', data);
  return 1;
}).then((data) => {
  console.log('then2', data);
});

// MyPromise.resolve()
//   .then(() => {
//     console.log(0);
//     return MyPromise.resolve(4);
//   })
//   .then((data) => {
//     console.log(data);
//   });

// MyPromise.resolve()
//   .then(() => {
//     console.log(1);
//   })
//   .then(() => {
//     console.log(2);
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(5);
//   })
//   .then(() => {
//     console.log(6);
//   });
