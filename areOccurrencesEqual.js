const areOccurrencesEqual = (s) => {
  if (s === '') {
    return false;
  }

  const charOccurrences = {};

  for (const char of s) {
    charOccurrences[char] = (charOccurrences[char] || 0) + 1;
  }

  const tracked = charOccurrences[s[0]];

  for (const key in charOccurrences) {
    if (charOccurrences[key] !== tracked) {
      return false;
    }
  }

  return true;
};
areOccurrencesEqual('abacbc');
