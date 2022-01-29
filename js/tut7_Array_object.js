let temp = [1,2,3,4,5,6,7,[45,33,22]];
console.log(temp);

//using constructor

let temp2 = new Array(23,33,4,4,"singh",[3,3,3,4]);
console.log(temp2,typeof(temp2));
let a = temp.indexOf(3);
console.log(a);


// Mutating or Modifying arrays
temp2.push(3564);
temp2.unshift(1009);
temp2.pop();
temp2.shift();
temp2.splice(2, 3);
temp2.reverse();

console.log(temp2);



let myobj = {
  'first name': 'harry', 
  channel: 'CodeWithHarry',
  isActive: true,
  marks: [1,5,3,6]
}

console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)

//if else in other manner;

let age = 45;

console.log(age >= 18 && age <= 100 ? "you are the valid user" : "you are not the valid user");


//FOR EACH IN THE JAVASCRIPT

let arr1 = [1,3,34,4,45,78];

arr1.forEach(function(element,index,array)
    {
        console.log(element,index,array);
    }
  );

let obj = {
  name = "sumit",
  age = 18,
  city = "meerut",
  phone = 111222333
}

for(let key in obj){
  // console.log(`The ${a} of object value is :`);
  console.log(arr1);
}
