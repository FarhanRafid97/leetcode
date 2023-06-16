//https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

var minimumSum = function (num) {
  const split = String(num).split('');

  split.sort((a, b) => Number(a) - Number(b));

  return Number(split[0] + split[2]) + Number(split[1] + split[3]);
};

console.log(minimumSum(2932));
