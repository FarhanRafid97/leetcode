var minimumTotal = function (triangle) {
  const n = triangle.length;

  const dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(i + 1);
  }
  for (let i = 0; i < n; i++) {
    dp[n - 1][i] = triangle[n - 1][i];
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      const sum1 = dp[i + 1][j + 1] + triangle[i][j];
      const sum2 = dp[i + 1][j] + triangle[i][j];

      dp[i][j] = sum1 > sum2 ? sum2 : sum1;
    }
  }
  return dp[0][0];
};

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
