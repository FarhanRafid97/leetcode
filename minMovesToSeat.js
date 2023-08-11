var minMovesToSeat = function (seats, students) {
  let output = 0;
  for (let i = 0; i < students.length; i++) {
    if (i === students.length - 1) {
      const min = students[i] > seats[0] ? students[i] - seats[0] : seats[0] - students[i];
      output += min;
    } else {
      const min =
        students[i] > seats[i + 1] ? students[i] - seats[i + 1] : seats[i + 1] - students[i];
      output += min;
    }
  }
  return output;
};
minMovesToSeat([3, 1, 5], [2, 7, 4]);
