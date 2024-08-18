const removeFromArray = function(array, ...valuesToRemove) {
    let changedArray = array;
    for (let value of valuesToRemove){
        deleteArrayValue(changedArray, value);
    };
    return changedArray;
};
function deleteArrayValue(array, value) {
        let indexOfValue = array.indexOf(value);
        if (indexOfValue > -1) array.splice(indexOfValue, 1);
        while (array.indexOf(value) !== -1) {
            deleteArrayValue(array, value);
        };
        return array;
}

// Do not edit below this line
module.exports = removeFromArray;
