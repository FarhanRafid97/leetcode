var isPalindrome = function (s) {
  const noSpaceStr = s.replaceAll(/[^a-zA-Z0-9]+/g, '').toLowerCase();

  return noSpaceStr === noSpaceStr.split('').reverse().join('');
};

console.log(isPalindrome('0P'));
