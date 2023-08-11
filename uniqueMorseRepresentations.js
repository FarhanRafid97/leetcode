var uniqueMorseRepresentations = function (words) {
  const morse = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  const morseCode = [];
  words.forEach((d) => {
    const convert = d
      .split('')
      .map((c) => morse[c.toUpperCase().charCodeAt(0) - 65])
      .join('');
    const idx = morseCode.indexOf(convert);

    if (idx === -1) {
      morseCode.push(convert);
    }
  });
  return morseCode.length;
};

uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']);
