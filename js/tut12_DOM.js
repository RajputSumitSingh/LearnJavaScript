console.log("hello world");

console.log(document);  //It is showing all the content

let a = document.all;

// a = document.body;
// a = document.forms[1];

Array.from(a).forEach(function(element,index,array){  // it is making all the content in arry Array.from() function
  console.log(element,index);
});
// console.log(a);