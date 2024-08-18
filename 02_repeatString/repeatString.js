const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR"
    }
    let finalString = "";
    // console.log(finalString)
    for (let i=0; i < num; i++){
        finalString += string;
        // console.log(finalString)
    };
    return finalString; 
};

// repeatString("hello", 3)

// Do not edit below this line
module.exports = repeatString;
