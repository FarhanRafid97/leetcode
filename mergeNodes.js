var mergeNodes = function (head) {
  const output = [];
  const tracking = [];
  for (let i = 0; i < head.length; i++) {
    if (head[i] === 0) {
      if (tracking.length !== 0) {
        const sum = tracking.reduce((a, b) => a + b);
        output.push(sum);
        tracking.splice(0, tracking.length);
      }
    } else {
      tracking.push(head[i]);
    }
  }
  return output;
};

console.log(mergeNodes([0, 1, 0, 3, 0, 2, 2, 0]));
