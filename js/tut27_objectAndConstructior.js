console.log("hello");


//object literal for creating objects

let car = {
  name : "maruti",
  topspeed : 300,
  run : function () {
    console.log("car is running");
  }
};

// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars

function generalCar(givenName,givenSpeed) {
  
  this.name = givenName;
  this.speed = givenSpeed;
  this.run = function () {
    console.log(`car is running with speed ${this.speed}`);
  };
  this.analyze = function() {
    console.log(
      `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
    );
}
}



//object SYNTAX USING NEW KEYWORD.

car1 = new generalCar("maruti 800",100);
car2 = new generalCar("BMW",500);

console.log(car2.analyze);