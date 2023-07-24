var reversePrefix = function (word, ch) {
  let words = ch;
  let wordPerf = '';

  for (let i = 0; i < word.length; i++) {
    if (words === '') {
      wordPerf += word[i];
    } else {
      if (word[i] === words) {
        words = '';
        wordPerf = word[i] + wordPerf;
      } else {
        wordPerf = word[i] + wordPerf;
      }
    }
  }
  if (words !== '') {
    return word;
  }
  return wordPerf;
};

reversePrefix('abcd', 'z');
