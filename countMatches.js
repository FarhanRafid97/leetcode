//https://leetcode.com/problems/count-items-matching-a-rule/

var countMatches = function (items, ruleKey, ruleValue) {
  const rule = ['type', 'color', 'name'];
  const indexRule = rule.findIndex((d) => d === ruleKey);

  let output = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i][indexRule] === ruleValue) {
      output += 1;
    }
  }

  return output;
};

countMatches(
  [
    ['phone', 'blue', 'pixel'],
    ['computer', 'silver', 'lenovo'],
    ['phone', 'gold', 'iphone'],
  ],
  'color',
  'silver'
);
