// console.log("hello world");


// The set the collection of non redundent elemtnts.or duplicate element.
let mySet = new Set();

mySet.add('sumit');
mySet.add(24);
mySet.add('sing');
mySet.add(333);
mySet.add('rajput');

mySet.delete(333);
console.log('size is ',mySet.size);

for(let i of mySet){

  console.log("i is : ",i);

}

console.log(mySet.has('sing'));

//this is iterate all the content inside the set
mySet.forEach((v)=>{
  console.log(v);
})

mySet = new Set(['sumit',23,{a:23,b:"singh"},'raja']);

let convertToArray = Array.from(mySet);

console.log(convertToArray);

