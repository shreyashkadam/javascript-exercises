const repeatString = function(string, num) {
    let newString = '';
    
    if(num < 0){
        return 'ERROR';
    } else if(num > 0){
        newString = string;
        for(let i=0; i < num - 1; i++){
            newString += string;
        }
    }
    
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
