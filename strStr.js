var strStr = function (haystack, needle) {
  const arrStr = haystack.split('');
  const findindex = arrStr.findIndex((d) => d === needle[0]);

  const a = arrStr.slice(findindex, findindex + needle.length).join('');

  return a === needle ? findindex : -1;
};

strStr('mississippi', 'issip');
