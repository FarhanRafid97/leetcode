//https://leetcode.com/problems/split-with-minimum-sum/

var splitNum = function (num) {
  const numArr = String(num)
    .split('')
    .sort((a, b) => Number(a) - Number(b));
  const mid = Math.floor(numArr.length / 2);
  if (numArr.length === 2) {
    return numArr.reduce((a, b) => Number(a) + Number(b));
  }
  console.log(mid);
  let output = [];
  let tracking = 1;

  for (let i = mid - 1; i >= 0; i--) {
    output.push(Number(numArr[i] + numArr[numArr.length - tracking]));
    tracking += 1;
  }

  const sum = output.reduce((a, b) => a + b);

  if (numArr.length % 2 !== 0) {
    return sum + Number(numArr[mid]);
  }
  return sum;
};

console.log(splitNum(11));
