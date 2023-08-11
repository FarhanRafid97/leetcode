var plusOne = function (digits) {
  let carrier = 1;
  for (let i = digits.length; i > 0; i--) {
    const sum = digits[i - 1] + carrier;
    if (sum > 9) {
      digits[i - 1] = 0;

      carrier = 1;
    } else {
      digits[i - 1] = sum;
      carrier = 0;
    }
  }
  if (carrier === 1) {
    return [1, ...digits];
  }

  return digits;
};

plusOne([9, 9, 9]);
