var kidsWithCandies = function (candies, extraCandies) {
  const maxVal = Math.max(...candies);

  candies.forEach((element, idx) => {
    candies[idx] = element + extraCandies >= maxVal;
  });
  return candies;
};
kidsWithCandies([2, 3, 5, 1, 3], 3);
