const leapYears = function (num) {
    if((num % 4 ==0)){
        if(num % 400 == 0){
            return true;
        } else if(num % 100 == 0){
            return false;
        } 
        return true;
    }

    return false;
}

leapYears(1996);

// Do not edit below this line
module.exports = leapYears;
