var combine = function (n, k) {
  const arr = [];
  for (let i = 1; i <= k + 1; i++) {
    for (let a = i + 1; a <= n; a++) {
      arr.push([i, a]);
    }
  }
  return arr;
};

combine(4, 2);
