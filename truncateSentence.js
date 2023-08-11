var truncateSentence = function (s, k) {
  const sArr = s.split(' ');
  return [...Array(k)].map((_, i) => sArr[i]).join(' ');
};

truncateSentence('What is the solution to this problem', 4);
