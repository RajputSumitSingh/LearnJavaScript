// console.log("hello world");

let count = 0;

// 1. Utility function to get DOM element from string
function getElementFromString(string) {
  let div = document.createElement('div');
  div.innerHTML = string;
  return div.firstElementChild;
}

// document.getElementById('RequestType').style.display = 'none';

//if use click on get request the json and parameter option will hide
document.getElementById('contentType').style.display = 'none';
let get = document.getElementById('Get');

get.addEventListener('click',()=>{
  document.getElementById('contentType').style.display = 'none';
  document.getElementById('parametersBox').style.display = 'none';
  document.getElementById('requestJsonBox').style.display = 'none';
})

let post = document.getElementById('Post');
post.addEventListener('click',()=>{
      document.getElementById('contentType').style.display = 'block';
      document.getElementById('requestJsonBox').style.display = 'block';

})

//initially the parameter box will hide
document.getElementById('parametersBox').style.display = "none";
document.getElementById('requestJsonBox').style.display = 'none';
document.getElementById('responseJsonBox').style.display = "none";


// if user click on json then parameter will hide
let Json = document.getElementById('Json');
Json.addEventListener('click', () => {
  document.getElementById('parametersBox').style.display = 'none';
  document.getElementById('requestJsonBox').style.display = 'block';
})


//if user click on parameter the jsno will hide
let Param = document.getElementById('Parameter');
Param.addEventListener('click', () => {

  document.getElementById('requestJsonBox').style.display = 'none';
  document.getElementById('parametersBox').style.display = 'block';

})



//if user click on + button then add more parameter
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {

  let params = document.getElementById('params');
  let string = ` <div class="form-row my-2">
  <label for="url" class="col-sm-2 col-form-label">Parameter ${count + 2}</label>
  <div class="col-md-4">
    <input type="text" class="form-control" id="parameterKey${count + 2}" placeholder="Enter Parameter ${count + 2} Key">
  </div>
  <div class="col-md-4">
    <input type="text" class="form-control" id="parameterValue${count + 2}" placeholder="Enter Parameter ${count + 2} Value">
  </div>
  <button  class="btn btn-primary minusParam"> - </button>
</div>`;



  let paramElement = getElementFromString(string);
  params.appendChild(paramElement);

  let deleteParam = document.getElementsByClassName('minusParam');
  for (item of deleteParam) {
    item.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    })
  }

  count++;

})



let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  //showing the content in the box
  document.getElementById('responseJsonBox').style.display = "block";

  let inputLink = document.getElementById('inputLink').value;
  let requestType = document.querySelector("input[name = 'request']:checked").value;
  let contentType = document.querySelector("input[name = 'Content']:checked").value;


  let data = {};
  if (contentType == 'PARAMETER') {
    for (let i = 0; i < count + 1; i++) {

      if (document.getElementById("parameterKey" + (i + 1)) != undefined) {

        let key = document.getElementById("parameterKey" + (i + 1)).value;
        let value = document.getElementById("parameterValue" + (i + 1)).value;

        data[key] = value;
      }
    }
    data = JSON.stringify(data);

  } else {
    data = document.getElementById('requestJsonText').value;
  }

  fetchApi();//we have to make the function



    console.log("The linke is : " + inputLink);
    console.log("The request type : " + requestType);
    console.log("The content type is : " + contentType);
    console.log("The data is :" + data);
    document.getElementById('responsePrism').innerText = data;


})


