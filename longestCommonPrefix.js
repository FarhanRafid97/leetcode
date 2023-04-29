var longestCommonPrefix = function (strs) {
  const maxChar = strs.map((d) => d.length).sort((a, b) => a - b)[0];
  const sortedArr = strs.map((d) => d.slice(0, maxChar));
  let trackingChar = '';
  let output = '';
  let isNext = true;
  const perArray = [];
  for (let i = 0; i < sortedArr.length; i++) {
    for (let s = 0; s < maxChar; s++) {
      if (perArray[s]) {
        perArray[s] = perArray[s] + sortedArr[i][s];
      } else {
        perArray.push(sortedArr[i][s]);
      }
    }
  }
  const a = perArray
    .map((d) =>
      d
        .split('')
        .filter((item, index, array) => array.indexOf(item) === index)
        .join('')
    )
    .filter((s) => {
      if (s.length === 1 && isNext) {
        isNext = true;
        return s;
      } else {
        isNext = false;
      }
    })
    .join('');

  return a;
};

longestCommonPrefix(['flower', 'flow', 'flight']);

// var longestCommonPrefix = function (strs) {
//   // sort the array because its rearrange alphabetical order
//   strs.sort();

//   console.log(strs[0]);
//   for (let i = 0; i < strs[0].length; i++) {
//     console.log(strs[0][i] !== strs[strs.length - 1][i]) {
//       return strs[0].substr(0, i);
//     }
//   }

//   return strs[0];
// };

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
