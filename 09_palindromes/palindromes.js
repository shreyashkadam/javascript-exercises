const palindromes = function(string) {
    let newString = (string.replace(/[^A-Z0-9]+/ig, "")).toLowerCase();

    let splittedString = newString.split('');
    let newSplittedString = [];
    let len = splittedString.length;

    for(let i = 0; i < len; i++){
        newSplittedString.push(splittedString.pop())
    }
    
    let reversed = newSplittedString.join('');

    if(reversed.localeCompare(newString) == 0){
        return true;
    } else {
        return false;
    }

};


// Do not edit below this line
module.exports = palindromes;
