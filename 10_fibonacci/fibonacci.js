const fibonacci = function (sequencePosition) {
  if (sequencePosition < 0) return "OOPS";
  //string handling
  sequencePosition = +sequencePosition;
  let f0 = 0;
  let f1 = 1;

  if (sequencePosition === 0) return f0;
  if (sequencePosition === 1) return f1;

  let f2;

  for (let i = 1; i < sequencePosition; i++) {
    // following fn = fn_-1 + fn_-2
    f2 = f0 + f1;
    //move the new values to their f0,f1 new position
    f0 = f1;
    f1 = f2;
  }
  //return the end result
  return f2;
};

// Do not edit below this line
module.exports = fibonacci;
