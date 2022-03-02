// console.log("hello world");


//normal function
function called() {
  console.log("hello sumit");
}

//return function;
function called() {
  let value = "sumit singh";
  return value;
}


// other type normal function
const called2 = function() {
  let value = "sumit singh2";
  return value;
}

// ARROW FUNCTION
const called3 = ()=> {

  let value = "sumit singh3";
  return value;
  
}

// ONE LINE IN ARROW FUNCTION RETURN
const called4 = (value)=> "SUMIT SINGH4 "+value;

//ONE LINE IN ARROW FUNCTION RETURN WITH ONE ARGUMENT
const called5 = value => "sumit singh5 "+value;

console.log(called4(222));