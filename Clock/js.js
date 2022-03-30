// console.log("hello world!");

function updateClock() {



  let currentTime = new Date();


  //getting the hour minute and second;
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let second = currentTime.getSeconds();
  let milliSecond = currentTime.getMilliseconds();

  let timeOfTheDay = (hour > 11) ? "PM" : "AM";

  hour = ((hour < 10) ? "0" : "") + hour;

  minute = ((minute < 10) ? "0" : "") + minute;

  second = ((second < 10) ? "0" : "") + second;

  hour = ((hour > 12) ? hour - 12 : hour);

  milliSecond = ((milliSecond < 10) ? "00" : "")+milliSecond;
  milliSecond = ((milliSecond < 100 && milliSecond > 9) ? "0" : "")+milliSecond;


  //showing the date into the dom using innerHtml;
  let show = document.getElementById('clock');
  show.innerHTML = hour + " : " + minute + " : " + second + " : " + milliSecond + " "+ timeOfTheDay;
}