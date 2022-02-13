console.log("hello world");

let a = document.getElementById('heading').addEventListener('click',function(e){ // mouseOver event fire

  // console.log("you have clicked the heading");
  // location.href = '//codewithharry.com';
  // console.log(e);
  console.log(e.target); // it will print the the element tag with data.
  console.log(e.bubbles);
});