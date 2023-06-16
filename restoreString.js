var restoreString = function (s, indices) {
  const output = [];
  for (let i = 0; i < indices.length; i++) {
    output[indices[i]] = s[i];
  }
  return output.join('');
};

restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]);
