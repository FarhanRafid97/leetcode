var replaceDigits = function (s) {
  let output = '';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i]))) {
      const code = s[i - 1].toUpperCase().charCodeAt(0) + Number(s[i]);

      output += String.fromCharCode(code).toLowerCase();
    } else {
      output += s[i];
    }
  }

  return output;
};

replaceDigits('a1b2c3d4e');
