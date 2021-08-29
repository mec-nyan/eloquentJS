let size = 8;

let checkers = '';

for (let i = 0; i < size; ++i){
  for (let j = 0; j < size; ++j){
    if (i % 2 === 0){
      if (j % 2 === 0) checkers += '#';
      else checkers += ' ';
    } else {
      if (j % 2 === 0) checkers += ' ';
      else checkers += '#';
    }
  }
  checkers += '\n';
}

console.log(checkers);
