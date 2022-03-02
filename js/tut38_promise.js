// console.log("hello ");

// const arr = [];
let arr = [
  {name : "sumit",class : 34,grade:'A'},
  {name : "rj",class : 4,grade:'C'},
  {name : "lkk",class : 3,grade:'B'},
  {name : "kapi",class : 24,grade:'A'},
];



function calledFunc() {

 return new Promise(function (resolve,reject) {
const check = true;
    if(check){
    setTimeout(() => {

      arr.forEach(function (a) {
        console.log(a);
      });
    }, 5000);
    resolve("successfull inside");
  }else{
    reject("There is not any array passed");
  }
    
  });

 

}

calledFunc().then((e) => {
  console.log("this is succesfull : "+e);
}).catch((err) => {
  console.log("here is something wrong  : "+err);
});
