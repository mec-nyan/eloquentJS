// function declaration
function square(x){
  return x * x;
}

// function expression
const sayHi = function(name){ return "Hi, " + name + "!" };

// arrow function
const double = x => x * 2;


// Tests
for (let i = 0; i < 10; ++i) console.log(`The square of ${i} is ${square(i)}`);

let names = [ 'Ada', 'Grace', 'Bjarne' ];
for (n of names) console.log(sayHi(n));

for (let i = 0; i < 10; ++i) console.log(`The double of ${i} is ${double(i)}`);
