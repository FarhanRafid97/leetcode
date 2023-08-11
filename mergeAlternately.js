var mergeAlternately = function (word1, word2) {
  let output = '';
  const length = Math.max(word1.length, word2.length);
  for (let i = 0; i < length; i++) {
    let str = '';

    str += word1[i] ?? '';
    str += word2[i] ?? '';

    output += str;
    str = '';
  }
  return output;
};

mergeAlternately('abc', 'pqr');
