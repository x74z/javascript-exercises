const convertToCelsius = function(value) {
 let operation = ((5/9*(value - 32)).toFixed(1));
  return +operation;
  
};

const convertToFahrenheit = function(value) {
  let operation = ((9/5*value)+32).toFixed(1);
  return +operation;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
