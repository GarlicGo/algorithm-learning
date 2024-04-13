class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invertTree(rootTreeNode) {
  if (rootTreeNode === null) {
    return null;
  }
  // 交换左右子树
  [rootTreeNode.left, rootTreeNode.right] = [
    invertTree(rootTreeNode.right),
    invertTree(rootTreeNode.left),
  ];
  return rootTreeNode;
}

function invertTreeFromArray(array) {
  const arrayToTree = (arr, index = 0) => {
    if (index >= arr.length || arr[index] === null) {
      return null;
    }
    const root = new TreeNode(arr[index]);
    root.left = arrayToTree(arr, 2 * index + 1);
    root.right = arrayToTree(arr, 2 * index + 2);
    return root;
  };

  const treeToArray = (root) => {
    if (!root) {
      return [];
    }
    const result = [];
    const queue = [root];
    while (queue.length) {
      const node = queue.shift();
      if (node) {
        result.push(node.val);
        queue.push(node.left || null);
        queue.push(node.right || null);
      } else {
        result.push(null);
      }
    }
    while (result[result.length - 1] === null) {
      result.pop(); // 删除数组末尾的null
    }
    return result;
  };

  const root = arrayToTree(array);
  const invertedRoot = invertTree(root);
  return treeToArray(invertedRoot);
}

// 测试代码
console.log(invertTreeFromArray([4, 2, 7, 1, 3, 6, 9])); // [4, 7, 2, 9, 6, 3, 1]
console.log(invertTreeFromArray([2, 1, 3])); // [2, 3, 1]
console.log(invertTreeFromArray([])); // []
