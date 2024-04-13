function solveQueries(n, q, a, queries) {
    let results = [];

    // 直接处理每个查询
    for (let query of queries) {
        let l = query[0] - 1;
        let r = query[1] - 1;
        let k = query[2];
        let found = false;
        let currentOr = 0;

        // 动态计算按位或，不使用额外的数组存储
        for (let i = l; i <= r; i++) {
            currentOr |= a[i];
            if (currentOr === k) {
                results.push(i + 1); // 找到满足条件的最小r'
                found = true;
                break;
            }
        }

        if (!found) {
            results.push(-1); // 如果没有找到符合条件的r'
        }
    }

    return results;
}

// 示例输入
const n = 5;
const q = 5;
const a = [3, 2, 3, 3, 6];
const queries = [
    [1, 2, 3],
    [1, 5, 7],
    [1, 4, 7],
    [2, 2, 2],
    [2, 3, 7]
];

// 执行查询并输出结果
const results = solveQueries(n, q, a, queries);
results.forEach(result => console.log(result));
