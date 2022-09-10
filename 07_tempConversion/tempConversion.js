const ftoc = function(num) {
  let cel = ((num - 32)*5)/9;
  return Math.round(cel*10)/10;
};

const ctof = function(num) {
  let feh = (num*9/5) + 32;
  return Math.round(feh*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
