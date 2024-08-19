const add = function (a, b) {
  return a + b;
};

const subtract = function (...nums) {
  return nums.reduce((previous, current) => previous - current);
};

const sum = function (nums) {
  return nums.reduce((previous, current) => previous + current, 0);
};
const multiply = function (nums) {
  return nums.reduce((previous, current) => previous * current, 1);
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  if (num === 0) return 1;
  let result = 1;
  for (let start = 1; start < num + 1; start++) {
    result = result * start;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
