// console.log("hello world")

class Employee{

  constructor(givenName,givenSalary,givenExperience){
    this.name = givenName;
    this.givenSalary = givenSalary;
    this.givenExperience = givenExperience;
  }

  slogan(){
    return `this is ${this.name} and very colorful.`;
  }

  joiningYear(){
    return 2022 - this.givenExperience;
  }

  static add(a,b){  //this static function is used for random any can call.
    return a+b;
  }
}



//inheritance the data of other class.
class Programmer extends Employee{

  constructor(givenName,givenSalary,givenExperience,language,github){
    super(givenName,givenSalary,givenExperience);
    this.language = language;
    this.github = github;
  }

  favourateLanguage(){
    if(this.language == "python"){
      return "python";
    }else{
      return "javascript";
    }
  }

  static maultiply(a,b){
    return a*b;
  }
}




// create the object
// let obj1 = new Employee("sumit",2000000,8);
// console.log(Employee.add(2,3));

let sumit = new Programmer("sumit",300000,4,"c++","sumit300");
// console.log(sumit);
console.log(sumit.favourateLanguage());
console.log(Programmer.maultiply(2,3));
