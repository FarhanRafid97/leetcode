var countDigits = function (num) {
  const divided = String(num);
  let output = 0;
  for (let i = 0; i < divided.length; i++) {
    if (num % divided[i] === 0) {
      output += 1;
    }
  }
  return output;
};

countDigits(121);
