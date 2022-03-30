// console.log("hello wotl");

let setTime = document.getElementById('setTime');

let submit = document.getElementById('submit');

let audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');

function ringAlarm(value) {

  let i = 0;
  
  setTimeout(() => {
    
      audio.play();

  }, value);

}


submit.addEventListener('click',()=>{
  console.log(setTime.value);
  setTime2 = new Date(setTime.value);
  let now = new Date();

  let value = setTime2 - now;

  ringAlarm(value);

  
})