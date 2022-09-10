const reverseString = function(string) {
    let splittedString = string.split('');
    let newSplittedString = [];
    let len = splittedString.length;

    for(let i = 0; i < len; i++){
        newSplittedString.push(splittedString.pop())
    }
    
    return hey = newSplittedString.join('');
};


// Do not edit below this line
module.exports = reverseString;
