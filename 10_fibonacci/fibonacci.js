const fibonacci = function (num) {
    let fibArr = [0,1];

    num = Number(num)
  
    if(num == 0 || num == 1){
        return fibArr[num];
    } else if(num < 0){
        return 'OOPS'
    } else {
        for (let i = 2; i <= num; i++) {
            fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
        }
    }

    return fibArr[num];
};

fibonacci('10');

// Do not edit below this line
module.exports = fibonacci;
