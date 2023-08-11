var myAtoi = function (s) {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = Math.pow(-2, 31);
  const removeAllSpace = s.trim().split('');

  let num = [];
  let sign = 1;
  let i = 0;
  let numNoSpace = [];

  if (removeAllSpace[i] === '-') {
    sign = -1;
    i++;
  } else if (removeAllSpace[i] === '+') {
    i++;
  }

  while (i < removeAllSpace.length && !isNaN(Number(removeAllSpace[i]))) {
    num.push(removeAllSpace[i]);
    i++;
  }

  for (let h = 0; h < num.length; h++) {
    if (num[h] === ' ') {
      break;
    }
    numNoSpace.push(num[h]);
  }

  let result = sign * Number(numNoSpace.join(''));

  if (result > INT_MAX) {
    result = INT_MAX;
  } else if (result < INT_MIN) {
    result = INT_MIN;
  }

  return result;
};

myAtoi('    -88827   5655  U');
