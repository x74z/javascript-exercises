const add = function(...nums) {
  let result = 0;
  for (let num of nums){
    result += num
  };
  return result;
};

const subtract = function(...nums) {
  let result = 0;
  // the temp is used so if i get 10 and 4 it isnt just 0-10=-10, -10 -4
  // so this way only 10 and 4 would get substracted
  let tempNumber ="";
  for (let num of nums){
    if (tempNumber === ""){
      tempNumber = num;
      continue;
    };
    result = tempNumber - num
  };
  return result;
	
};

const sum = function(nums) {
  let result = 0;
  for (let num of nums){
    result += num
  };
  return result;
	
};

const multiply = function(nums) {
  let result = 1;
  for (let num of nums){
    result = result * +num;
  };
  return result;

};

const power = function(num, power) {
  return num**power;
	
};

const factorial = function(num) {
  if (num === 0) return 1;
  let result = 1
  for (let start = 1 ;start < num+1; start++){
    result = result * start;
  };
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
