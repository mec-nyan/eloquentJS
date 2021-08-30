const countBs = (word) => countChar(word, 'B');


const countChar = (word, char) => {
  let ch = 0;
  for (let i = 0; i < word.length; ++i){
    if (word[i] === char) ++ch;
  }
  return ch;
}


// Tests
let words = [ 'Baby', 'Bullshit', 'AliBaba', 'car', 'guitar', 'BUBBLE', 'dinosaur' ];

let letters = [ 'a', 'b', 'u', 'L', 'k', 'z', 'r' ];


for (word of words){
  console.log(`There are ${countBs(word)} 'B's on ${word}`);
  let letter = letters[Math.floor(Math.random() * letters.length)];
  console.log(`There are ${countChar(word, letter)} '${letter}'s on ${word}`);
}

