// console.log("ehlllksjfa");


let a = 5;



// if(a != 4){

//   throw("invalid no.");
// }else{

//   console.log("The value of a is : "+a);
// }





try {
  console.log("inside try bolck");

  if(a != 4){

    throw("This is mannually written error");
  }else{
  
    console.log("The value of a is : "+a);
  }
  console.log("inside try bolck");

  
} catch (error) {

  console.log(error);
  
}finally{
  console.log("this is inside finally");
}