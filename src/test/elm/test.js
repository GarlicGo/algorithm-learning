function maxQuestions(n, a, b) {
    const dp = Array.from({ length: n }, () => [0, 0]);

    // 初始化第一题
    if (a[0] <= 1000) dp[0][0] = 1; // 如果C++时间符合，则标记为1
    if (b[0] <= 2000) dp[0][1] = 1; // 如果Java时间符合，则标记为1

    for (let i = 1; i < n; i++) {
        // 确保不会从无法通过的状态转移过来
        if (a[i] <= 1000) {
            // 只有当上一题使用Java且能通过时，才能考虑使用C++
            dp[i][0] = b[i-1] <= 2000 ? dp[i-1][1] + 1 : 0;
        }
        if (b[i] <= 2000) {
            // 可以从上一题的Java或C++转移过来，只有它们能通过时
            dp[i][1] = Math.max(a[i-1] <= 1000 ? dp[i-1][0] : 0, dp[i-1][1]) + 1;
        }
    }

    // 检查最后一题的最大值
    return Math.max(dp[n-1][0], dp[n-1][1]);
}

// 示例输入
const n = 3;
const a = [800, 900, 1200];
const b = [1100, 2300, 1400];

// 输出结果
console.log(maxQuestions(n, a, b));
