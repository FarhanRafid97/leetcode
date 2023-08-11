var defangIPaddr = function (address) {
  return address.replaceAll('.', '[.]');
};

defangIPaddr('1.1.1.1');
