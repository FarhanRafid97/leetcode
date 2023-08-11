var checkIfPangram = function (sentence) {
  if (sentence.length < 26) {
    return false;
  }
  const obj = {};
  let length = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      continue;
    }
    if (!obj.hasOwnProperty(sentence[i])) {
      obj[sentence[i]] = String.fromCharCode(length + 65).toLowerCase();
      length++;
    }
  }
  return Object.keys(obj).length === 26;
};
checkIfPangram('thequickbrownfoxjumpsoverthelazydog');
