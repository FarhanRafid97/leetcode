var maximumUnits = function (boxTypes, truckSize) {
  let maxi = truckSize;

  let output = 0;
  const sortedBox = boxTypes.sort((a, b) => a[1] - b[1]).reverse();
  for (let i = 0; i < sortedBox.length; i++) {
    const minus = maxi - boxTypes[i][0];
    if (minus > 0) {
      output += boxTypes[i][0] * boxTypes[i][1];
      maxi = minus;
    } else {
      return output + maxi * boxTypes[i][1];
    }
  }

  return output;
};

maximumUnits(
  [
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9],
  ],
  10
);
