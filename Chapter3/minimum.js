// Return the smallest of two values
const min = (a, b) => a < b ? a : b;

// Tests
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];

const  TIMES = 10;

for (let i = 0; i < TIMES; ++i){
  let a = nums[Math.floor(Math.random() * nums.length)],
      b = nums[Math.floor(Math.random() * nums.length)];

  console.log(`Find the minimum of '${a}' and '${b}': ${min(a, b)}`);
}
