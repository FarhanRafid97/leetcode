var calPoints = function (operations) {
  const tracking = [];
  for (let i = 0; i < operations.length; i++) {
    if (isNaN(Number(operations[i]))) {
      if (operations[i] === 'C') tracking.pop();
      if (operations[i] === 'D') tracking.push(tracking[tracking.length - 1] * 2);
      if (operations[i] === '+')
        tracking.push(tracking[tracking.length - 1] + tracking[tracking.length - 2]);
    } else {
      tracking.push(Number(operations[i]));
    }
  }
  return tracking.length > 0 ? tracking.reduce((a, b) => a + b) : 0;
};

calPoints(['5', '2', 'C', 'D', '+']);
