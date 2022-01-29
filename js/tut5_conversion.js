//typeconversion

let myVar = String(34);
console.log(myVar,(typeof(myVar)));

let boolenaVar = Number(true);
console.log(boolenaVar,(typeof(boolenaVar)));

let date = new Date();
console.log(date);


let arr = Number([1,2,3,3,4,5,6,8]);
console.log(arr,typeof arr);



let number = parseFloat('34.098');


console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);