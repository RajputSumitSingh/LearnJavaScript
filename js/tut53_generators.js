

function* generatorsValue() {
  let i = 0;
  while(i!=5){
    
    yield i++;

  }
}


const gen = generatorsValue();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());