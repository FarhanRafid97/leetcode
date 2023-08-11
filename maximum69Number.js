var maximum69Number = function (num) {
  const stringArr = String(num).split('');
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] < 9) {
      stringArr[i] = '9';
      break;
    }
  }
  return Number(stringArr.join(''));
};

maximum69Number(9669);
