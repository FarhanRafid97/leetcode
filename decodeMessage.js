var decodeMessage = function (key, message) {
  const obj = {};
  let length = 0;
  for (let i = 0; i < key.length; i++) {
    if (key[i] === ' ') {
      continue;
    }
    if (!obj.hasOwnProperty(key[i])) {
      obj[key[i]] = String.fromCharCode(length + 65).toLowerCase();
      length++;
    }
  }
  let output = '';
  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      output += ' ';
    } else {
      output += obj[message[i]];
    }
  }

  return output;
};

decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv');

// for (let i = 65; i <= 90; i++) {
//   alphabet.push(String.fromCharCode(i).toLowerCase());
// }
