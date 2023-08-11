var sortSentence = function (s) {
  const arr = s.split(' ');
  const newSentence = [];
  for (let i = 0; i < arr.length; i++) {
    newSentence[arr[i][arr[i].length - 1] - 1] = arr[i].replace(arr[i][arr[i].length - 1], '');
  }

  return newSentence.join(' ');
};
sortSentence('is2 sentence4 This1 a3');
