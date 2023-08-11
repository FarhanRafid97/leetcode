var splitWordsBySeparator = function (words, separator) {
  let word = [];
  let tracking = 0;
  for (let i = 0; i < words.length; i++) {
    for (let a = 0; a < words[i].length; a++) {
      if (words[i][a] === separator && words[i][a + 1] !== separator) {
        tracking += 1;
        continue;
      }
      word[tracking] === undefined
        ? (word[tracking] = words[i][a])
        : (word[tracking] += words[i][a]);
    }
    tracking += 1;
  }
  console.log(word);
  return word;
};

splitWordsBySeparator(['$easy$', '$problem$'], '$');
