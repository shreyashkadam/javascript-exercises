const add = function(a,b) {
  return a + b;	
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let prod = 1;
  for(let i = 0; i < arr.length; i++){
    prod = prod * arr[i];
  }
  return prod;
};

const power = function(a,b) {
	let pow = 1;
  for(let i = 0; i < b; i++){
    pow = pow * a;
  }

  return pow;
};

const factorial = function(num) {
	let fact = 1;
  for(let i = num; i > 0; i--){
    fact = fact * i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
