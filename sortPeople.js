var sortPeople = function (names, heights) {
  const output = [];
  const data = [];
  for (let i = 0; i < names.length; i++) {
    data.push({ name: names[i], height: heights[i] });
  }
  return [...data]
    .sort((a, b) => a.height - b.height)
    .reverse()
    .map((d) => d.name);
};

console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]));
