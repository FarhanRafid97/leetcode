var findCenter = function (edges) {
  const [[a, b], [c, d]] = edges;
  return a === c || a === d ? a : b;
};
console.log(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
  ])
);
