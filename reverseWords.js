var reverseWords = function (s) {
  return s
    .split(' ')
    .map((d) => d.split('').reverse)
    .join(' ');
};
reverseWords("Let's take LeetCode contest");
