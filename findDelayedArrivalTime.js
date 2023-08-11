var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  const sum = arrivalTime + delayedTime;
  if (sum >= 24) {
    return sum - 24;
  }

  return sum;
};

findDelayedArrivalTime(15, 5);
