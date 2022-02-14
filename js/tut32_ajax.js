// console.log("hello worl");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', '../dummy.json', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');//for showing the spinner
    }

       xhr.onreadystatechange = function () {
       console.log('ready state is ', xhr.readyState);       
    }

    // What to do when response is ready
    xhr.onload = function () {
      if(this.status === 200){

          console.log(this.responseText);
      }
      else{
          console.log("Some error occured");
      }

  }

  
console.log("sumit singh is king");
    
      // send the request
      xhr.send();
}


let btn2 = document.getElementById('popBtn');
btn2.addEventListener('click',popHandler);

function popHandler() {
  console.log('You have clicked the pop handler');

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // Open the object
  xhr.open('GET', '../dummy.json', true);


  // What to do when response is ready
  xhr.onload = function () {
      if(this.status === 200){
          let obj = JSON.parse(this.responseText);
          console.log(obj);
          let list = document.getElementById('list');
          str = obj.value;
          // for (key in obj)
          // {
          //     str += `<li>${obj[key]} </li>`;
          // }
          list.innerText = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
  }


