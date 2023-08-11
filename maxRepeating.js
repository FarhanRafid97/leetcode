var maxRepeating = function (sequence, word) {
  let output = 0;
  let tracking = 0;
  for (let i = 0; i < sequence.length; i++) {
    for (let a = 0; a < word.length; a++) {
      if (sequence[i + a] === word[a]) {
        tracking += 1;
      } else {
        console.log(i);
        tracking = 0;
      }
    }
    if (tracking === word.length) {
      output += 1;
      i += tracking;
      tracking = 0;
    }
  }
  console.log(output);
  return output;
};

maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba');
