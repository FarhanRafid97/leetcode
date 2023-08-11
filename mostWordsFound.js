var mostWordsFound = function (sentences) {
  let output = 0;
  sentences.forEach((d) => {
    const numword = d.split(' ').length;
    if (numword > output) {
      output = numword;
    }
  });
  return output;
};
mostWordsFound(['alice and bob love leetcode', 'i think so too', 'this is great thanks very much']);
