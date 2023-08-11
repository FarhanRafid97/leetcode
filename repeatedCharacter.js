var repeatedCharacter = function (s) {
  const arr = [];
  let output;
  for (let i = 0; i < s.length; i++) {
    const idx = arr.findIndex((d) => d === s[i]);

    if (idx !== -1) {
      return s[i];
    }
    arr.push(s[i]);
  }
};

console.log(repeatedCharacter('abccbaacz'));
