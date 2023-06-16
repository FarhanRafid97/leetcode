//https://leetcode.com/problems/decompress-run-length-encoded-list/

var decompressRLElist = function (nums) {
  let output = [];
  for (let i = 0; i < nums.length; i += 2) {
    const newArr = [...Array(nums[i])].map((_) => nums[i + 1]);
    output.push(...newArr);
  }
  return output;
};

decompressRLElist([1, 2, 3, 4]);
