const sumAll = function(num1, num2) {
    // check if number are positive,type number and integer
    if (num1 < 0 || num2 < 0 
        || typeof num1 !== "number" 
        || typeof num2 !== "number" 
        || !Number.isInteger(num1)
        || !Number.isInteger(num2)
    ) return "ERROR";
    let result = 0;


    // if start number is bigger than end, swap them
    if (num1 > num2){
        // this var is stored to change num2
        let tempNum1 = num1;
        num1 = num2
        num2 = tempNum1 
    }

    for (;num1 <= num2;num1++){
        result += num1;
    };
    return result;  
};
sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
