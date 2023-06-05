var reverseString = function (s) {
  const copyArr = [...s];
  for (let i = s.length - 1; i >= 0; i--) {
    s[i] = copyArr[copyArr.length - i - 1];
  }
  return s;
};

reverseString(['h', 'e', 'l', 'l', 'o']);
