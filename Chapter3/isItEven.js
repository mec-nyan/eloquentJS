// Find out if a number is even with recursion
function abs(num){
  return num >= 0 ? num : num * -1;
}

function isEven(num){
  num = abs(num);
  if (num === 0) return true;
  if (num === 1) return false;
  return isEven(num - 2);
}

// Tests
const TIMES = 10;

for (let i = 0; i < TIMES; ++i){
  let n = Math.floor(Math.random() * 200) - 99; // numbers from -99 up to 100
  console.log(`${n} is ${isEven(n) ? 'even' : 'odd'}`);
}
