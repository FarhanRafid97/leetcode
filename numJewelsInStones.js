var numJewelsInStones = function (jewels, stones) {
  const jewwelsArr = jewels.split('');
  const stonesArr = stones.split('');
  let output = 0;
  jewwelsArr.forEach((d) => stonesArr.forEach((s) => (s === d ? (output += 1) : null)));
  return output;
};

numJewelsInStones('aA', 'aAAbbbb');
