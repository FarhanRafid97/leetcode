var shortestToChar = function (s, c) {
  const arr = s.split('');
  const idx = arr.map((d, i) => (d === c ? i : '')).filter(String);
  const track = [];
  for (let i = 0; i < arr.length; i++) {
    track.push(idx.map((d) => (d > i ? d - i : i - d)).sort((a, b) => a - b)[0]);
  }
  return track;
};
shortestToChar('loveleetcode', 'e');
[3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0];
