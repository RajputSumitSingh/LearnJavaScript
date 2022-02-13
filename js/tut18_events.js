console.log("hello world");

let btn = document.getElementById('btn').addEventListener("click",func1);


function func1(e){

  console.log("Thanks",e);
}

const myclick = document.querySelector('.container');
myclick.addEventListener('mouseenter', function (e) {
  console.log("double click on the function");
  }
    );

document.querySelector('.container').addEventListener('mouseleave',function(e){
  console.log("you exit");
});

document.querySelector('.container').addEventListener('mousemove',function(e){
  console.log("you move the mouse");
});

document.querySelector('.container').addEventListener('mousemove',function(e){
  console.log("offset x =>"+e.offsetX,"offset y =>"+e.offsetY);
  // document.body.style.backgroundColor = "red";
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},${e.offsetX+e.offsetY})`;
});


const mouseTarget = document.getElementById('#heading');
mouseTarget.addEventListener('mousemove', function(e) {
mouseTarget.style.border = '5px dotted blue';
  });