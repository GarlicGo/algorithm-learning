/**
 * 题目：实现事件处理器 EventEmitter
 * 需支持以下功能：
 * 
 * const event = new EventEmitter(); // 创建事件
 * event.on(name, callback); // 绑定事件
 * event.off(name); //取消绑定
 * event.trigger(name, data); //触发事件
 */

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(name, callback) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(callback);
  }

  off(name) {
    if (this.events[name]) {
      delete this.events[name];
    }
  }

  trigger(name, data) {
    if (this.events[name]) {
      this.events[name].forEach((callback) => callback(data));
    }
  }
}
