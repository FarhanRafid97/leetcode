var isValidSudoku = function (board) {
  const hasDuplicates = (arr) => {
    const numCount = {};
    for (let num of arr) {
      if (num !== '.' && num !== ' ') {
        if (numCount[num]) return true;
        numCount[num] = true;
      }
    }

    return false;
  };

  const isValidBox = (starCol, startRow) => {
    let tracked = [];
    for (let i = startRow; i < startRow + 3; i++) {
      for (let a = starCol; a < starCol + 3; a++) {
        tracked.push(board[i][a]);
      }
    }

    return !hasDuplicates(tracked);
  };

  for (let i = 0; i < 9; i++) {
    if (hasDuplicates(board[i])) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    const tracker = [];
    for (let o = 0; o < 9; o++) {
      tracker.push(board[o][i]);
    }
    if (hasDuplicates(tracker)) {
      return false;
    }
  }

  for (let i = 0; i < 9; i += 3) {
    for (let b = 0; b < 9; b += 3) {
      if (!isValidBox(i, b)) {
        return false;
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
