var isValid = function (s) {
  if (s.length < 2) {
    return false;
  }
  const base = [
    { parent: '{', child: '}' },
    { parent: '(', child: ')' },
    { parent: '[', child: ']' },
  ];
  let tracking = [];

  const splitTwo = s.match(/.{1,2}/g);
  splitTwo.map((d) => {
    const filtered = base.filter((b) => b.parent === d[0]);
    if (filtered.length <= 0) {
      tracking.push(true);
      return;
    }
    if (filtered[0].child === d[1]) {
      tracking.push(true);
      return;
    } else {
      tracking.push(false);
      return;
    }
  });
  const isFalse = tracking.filter((f) => !f);
  return isFalse.length === 0;
};

isValid('(]');
