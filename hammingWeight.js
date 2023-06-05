var hammingWeight = function (n) {
  return n.toString(2).replaceAll('0', '').length;
};

console.log(hammingWeight(00000000000000000000000010000000));
