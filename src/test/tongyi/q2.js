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
