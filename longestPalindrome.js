var longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }

  let longesPalindromStr = '';
  for (let i = 0; i < s.length; i++) {
    const palindromA = expandFromMidle(s, i, i);
    if (palindromA.length > longesPalindromStr.length) {
      longesPalindromStr = palindromA;
    }
    const palindromB = expandFromMidle(s, i, i + 1);
    if (palindromB.length > longesPalindromStr.length) {
      longesPalindromStr = palindromB;
    }
  }
  return longesPalindromStr;
};

const expandFromMidle = (s, left, right) => {
  while (left >= 0 && right <= s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return s.substring(left + 1, right);
};
longestPalindrome('caba');
