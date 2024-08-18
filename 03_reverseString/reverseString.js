const reverseString = function(string) {
    if (typeof string == string){
        return "please add string";
    };
    const stringArray = string.split("");
    const stringArrayLength = stringArray.length;
    let reversedString = []
    // reverse stringArray 
    for (let letter of stringArray){
        reversedString.unshift(letter);
    };
    // return reversed array as single string
    return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
