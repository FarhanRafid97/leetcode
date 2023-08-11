var squareIsWhite = function (coordinates) {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const indexOf = arr.findIndex((d) => d === coordinates[0]) + 1;
  if (Number(coordinates[1] % 2 === 0)) {
    return indexOf % 2 === 0 ? false : true;
  } else {
    return indexOf % 2 !== 0 ? false : true;
  }
};
console.log(squareIsWhite('a2'));
