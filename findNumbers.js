var findNumbers = function (nums) {
  let output = 0;
  nums.forEach((d) => {
    String(d).length % 2 === 0 ? (output += 1) : null;
  });
  return output;
};

findNumbers([12, 345, 2, 6, 7896]);
