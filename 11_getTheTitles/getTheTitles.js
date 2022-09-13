
const getTheTitles = function(books) {
    let arrFin = [];
    let len = books.length;

    for(let i = 0; i < len; i++){
        arrFin.push(Object.values(books[i])[0]);
    }

    return arrFin;
};


// Do not edit below this line
module.exports = getTheTitles;
