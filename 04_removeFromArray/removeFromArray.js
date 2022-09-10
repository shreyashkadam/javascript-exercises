const removeFromArray = function(...theArgs) {
    let len = theArgs[0].length;

    for(let i = 1; i < theArgs.length; i++){
        for(let j=0; j < len; j++){
            if(theArgs[0][j] === theArgs[i]){
                theArgs[0].splice(j,1);
                break;
            }
        }
    }

    return theArgs[0];

};


// Do not edit below this line
module.exports = removeFromArray;
