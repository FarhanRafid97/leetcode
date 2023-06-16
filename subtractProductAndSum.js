// /https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
var subtractProductAndSum = function (n) {
  const sum = [];
  const nArr = String(n).split('');
  for (let i = 0; i < nArr.length; i++) {
    const nArrNum = Number(nArr[i]);

    if (i === 0) {
      sum[0] = nArrNum;
      sum[1] = nArrNum;
    } else {
      sum[0] = sum[0] * nArrNum;
      sum[1] = sum[1] + nArrNum;
    }
  }

  return sum[0] - sum[1];
};
subtractProductAndSum(234);
