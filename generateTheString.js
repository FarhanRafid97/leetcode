var generateTheString = function (n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    const randomNumb = Math.floor(Math.random() * 26);
    str += String.fromCharCode(randomNumb + 65).toLowerCase();
  }
  return str;
};
generateTheString(7);
