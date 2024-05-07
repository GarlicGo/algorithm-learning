class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        // 重新放入，以更新它的位置到最近使用
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }/*  */

    put(key, value) {
        // 如果键存在，先删除旧的
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size === this.capacity) {
            // 如果容量满了，删除最久未使用的项（Map的第一个元素）
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
        // 插入新元素或更新元素位置
        this.cache.set(key, value);
    }
}

// 测试代码
const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1));    // 返回 1
lRUCache.put(3, 3); // 使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2));    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1));    // 返回 -1 (未找到)
console.log(lRUCache.get(3));    // 返回 3
console.log(lRUCache.get(4));    // 返回 4
