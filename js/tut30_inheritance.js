// console.log("eee");

//create the constructor
function employee(name,salary,experience){
  this.name = name;
  this.salary=salary;
  this.experience = experience;
};


//Inheritance
function programmer(name,salary,experience,language){
  employee.call(this,name,salary,experience); //inheritance the value or data into programer.
  this.language = language;
}


//Inheritance of prototype 
function Factory() { 
  /* ... */
   }
  Factory.prototype.FactoryMethod = function FactoryMethod() {}


function Product1() {
     Factory.call(this) 
  }
  Product1.prototype.constructor = Product1

//create the object;
let obj1 = new employee("harry",300,5);
let obj2 = new employee("sumit",3900,5);
let obj3 = new employee("rahul",900,5);
let obj4 = new employee("kapil",100,5);
let obj5 = new employee("raja",500,5);
let obj6 = new employee("neha",30,5);

//create the object of programmer;
let p1 = new programmer("kapil",100,5,"java");
let p2 = new programmer("raja",500,5,"c/c++");
let p3 = new programmer("neha",30,5,"javaScript");

//create the object of product
let q1 = new Product1();
// let q2 = new Product1();
// let q3 = new Product1();

console.log(q1);
// console.log(q2);
// console.log(q3);