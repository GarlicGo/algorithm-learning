function maxZeros(n, k, arr) {
    // 计算每个元素变为0所需的操作数，并存储
    const costs = arr.map(x => Math.abs(x));

    // 对操作成本进行排序，这样我们可以优先处理成本较低的操作
    costs.sort((a, b) => a - b);

    let count = 0;
    let totalCost = 0;

    // 计算最大可能的0的数量
    for (let cost of costs) {
        if (totalCost + cost > k) break;  // 如果当前元素操作超过了允许的k值，停止
        totalCost += cost;  // 累加操作成本
        count++;            // 成功转变一个元素为0
    }

    return count;
}

// 示例
const n = 4;
const k = 5;
const arr = [-2, 3, -2, 9];
console.log(maxZeros(n, k, arr));  // 输出应为2
