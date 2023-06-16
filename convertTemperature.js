//https://leetcode.com/problems/convert-the-temperature/

//Kelvin = Celsius + 273.15
//Fahrenheit = Celsius * 1.80 + 32.00
var convertTemperature = function (celsius) {
  return [celsius + 273.15, celsius * 1.8 + 32.0];
};

console.log(convertTemperature(36.5));
