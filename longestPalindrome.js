// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

var longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }

  let longesPalindromStr = '';
  for (let i = 0; i < s.length; i++) {
    const palindromA = expandFromMidle(s, i, i);
    if (palindromA.length > longesPalindromStr.length) {
      longesPalindromStr = palindromA;
    }
    const palindromB = expandFromMidle(s, i, i + 1);
    if (palindromB.length > longesPalindromStr.length) {
      longesPalindromStr = palindromB;
    }
  }
  return longesPalindromStr;
};

const expandFromMidle = (s, left, right) => {
  while (left >= 0 && right <= s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return s.substring(left + 1, right);
};
longestPalindrome('caba');
