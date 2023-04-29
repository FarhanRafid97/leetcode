var generate = function (numRows) {
  let arr = [[1], [1, 1]];
  if (numRows === 1) {
    arr = [[1]];
  }
  if (numRows === 2) {
    arr = [[1], [1, 1]];
  }

  for (let i = 2; i < numRows; i++) {
    const sum = [];

    arr[i - 1].map((a, indexMap) => {
      arr[i - 1].length - 1 > indexMap ? sum.push(a + arr[i - 1][indexMap + 1]) : null;
    });
    sum.unshift(1);
    sum.push(1);
    arr.push(sum);
  }
  console.log(arr);
};

generate(5);
