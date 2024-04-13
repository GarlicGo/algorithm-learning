function countMixedSubtrees(n, colors, edges) {
  // 邻接表存储树结构
  const adjList = new Array(n + 1);
  for (let i = 1; i <= n; i++) {
    adjList[i] = [];
  }
  edges.forEach(([u, v]) => {
    adjList[u].push(v);
    adjList[v].push(u);
  });
  // 访问标记数组
  const visited = new Array(n + 1).fill(false);
  let count = 0;
  // dfs函数，用于遍历树并应用动态规划
  function dfs(node) {
    visited[node] = true;
    let hasRed = colors[node - 1] === 'R';
    let hasBlack = colors[node - 1] === 'B';
    for (let neighbor of adjList[node]) {
      if (!visited[neighbor]) {
        const [childHasRed, childHasBlack] = dfs(neighbor);
        hasRed = hasRed || childHasRed;
        hasBlack = hasBlack || childHasBlack;
      }
    }
    // 如果当前节点的子树包含红色和黑色
    if (hasRed && hasBlack) {
      count++;
    }
    return [hasRed, hasBlack];
  }
  dfs(1);
  return count;
}
// 示例输入
const n = 3;
const colors = 'BRB';
const edges = [
  [1, 2],
  [2, 3],
];

console.log(countMixedSubtrees(n, colors, edges)); // 输出结果
