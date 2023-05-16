var fizzBuzz = function (n) {
  let fb = [];

  for (let i = 1; i <= n; i++) {
    let string = '';
    if (i % 3 === 0) string += 'Fizz';
    if (i % 5 === 0) string += 'Buzz';

    fb.push(string === '' ? `${i}` : string);
  }

  return fb;
};

console.log(fizzBuzz(15));
