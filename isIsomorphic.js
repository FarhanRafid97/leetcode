var isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    console.log(s.indexOf(s[i], i + 1));
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
      return false;
    }
  }
  return true;
};

isIsomorphic('bbbaaaba', 'aaabbbba');
