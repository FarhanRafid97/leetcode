var hasPathSum = function (root, targetSum) {
  if (!root) {
    // base case: empty tree
    return false;
  }
  if (!root.left && !root.right) {
    // base case: leaf node
    return root.val === targetSum;
  }
  const leftSum = hasPathSum(root.left, targetSum - root.val);
  const rightSum = hasPathSum(root.right, targetSum - root.val);

  return leftSum || rightSum;
};

console.log(hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22));
