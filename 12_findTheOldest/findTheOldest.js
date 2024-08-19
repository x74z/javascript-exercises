const findTheOldest = function (array) {
  const currentYear = new Date().getFullYear();
  // add the person to this object, person name as key and years lived as value
  let peopleYearsLivedObject = {};
  for (personObject of array) {
    let yearsLived;
    if ("yearOfDeath" in personObject) {
      yearsLived = personObject.yearOfDeath - personObject.yearOfBirth;
    } else {
      yearsLived = currentYear - personObject.yearOfBirth;
    }
    peopleYearsLivedObject[personObject.name] = yearsLived;
  }
  //itirate trough the new object to find the oldest by comparing the values
  let currentIteration = 0;
  let oldestPersonName;
  let lastName;
  for (current in peopleYearsLivedObject) {
    if (currentIteration === 0) {
      currentIteration = peopleYearsLivedObject[current];
      oldestPersonName = current;

      continue;
    }
    // check which one is larger
    if (currentIteration < peopleYearsLivedObject[current]) {
      currentIteration = peopleYearsLivedObject[current];
      oldestPersonName = current;
    }

    lastName = current;
  }
  let obj = array.find((o) => o.name === oldestPersonName);

  return obj;
};

// Do not edit below this line
module.exports = findTheOldest;
