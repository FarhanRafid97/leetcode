var finalValueAfterOperations = function (operations) {
  let output = 0;

  operations.forEach((d) => (d.includes('+') ? (output += 1) : (output -= 1)));
  return output;
};

finalValueAfterOperations(['X++', '++X', '--X', 'X--', '++X']);
