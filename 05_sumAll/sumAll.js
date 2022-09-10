const sumAll = function(num1, num2) {
    let sum = 0;

    //validation
    if(typeof num1 != 'number' || typeof num2 != 'number' || num1 < 0 || num2 < 0){
        return 'ERROR';
    }

    //swap numbers if first number is larger
    if(num1 > num2){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    for(let i = num1; i <= num2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
