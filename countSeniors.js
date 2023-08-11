var countSeniors = function (details) {
  let output = 0;

  details.forEach((d) => {
    const variable = d.match(/.{1,11}/g)[1].match(/.{1,2}/g);
    console.log(variable);

    if (Number(variable[0]) >= 60) {
      output += 1;
    }
  });
  console.log(output);

  return output;
};
countSeniors([
  '9751302862F0693',
  '3888560693F7262',
  '5485983835F0649',
  '2580974299F6042',
  '9976672161M6561',
  '0234451011F8013',
  '4294552179O6482',
]);
