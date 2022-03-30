// console.log("hello word");

const myMap = new Map();

console.log(myMap);

const key1 = "sumit singh", key2 = {}, key3 = ()=>{};

myMap.set(key1 , 'Hello my name is sumit singh and what is ging on');
myMap.set(key2 , 'This is the second map');
myMap.set(key3 , 'this is the third and function map');


// let value = myMap.get(key1);
// console.log(value);

for(let [key,value] of myMap){
  console.log(key+" : "+value);
}

for(let key of myMap.keys()){
  console.log("key is : ",key);
}


for(let value of myMap.values()){
  console.log("value is : ",value);
}

console.log("*************************************");
myMap.forEach((value,key)=>{
  console.log(key," : ",value);
})

//now we convert the map of ovjects into the arry

console.log("The Array conversion is held");
let myArray = Array.from(myMap);
console.log(myArray);

console.log("The Array keys conversion is held");
 myArray = Array.from(myMap.keys());
console.log(myArray);

console.log("The Array values conversion is held");
 myArray = Array.from(myMap.values());
console.log(myArray);