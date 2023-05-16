var getRow = function (rowIndex) {
  let arr = [[1], [1, 1]];

  for (let i = 2; i <= 33; i++) {
    const sum = [];

    arr[i - 1].map((a, indexMap) => {
      arr[i - 1].length - 1 > indexMap ? sum.push(a + arr[i - 1][indexMap + 1]) : null;
    });
    sum.unshift(1);
    sum.push(1);
    arr.push(sum);
  }

  return arr[rowIndex];
};
console.log(getRow(3));
