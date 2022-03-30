// console.log("hello worl");

let fetchApi = document.getElementById('fetchApi');

fetchApi.addEventListener('click',getApi);

function getApi() {



  // for the get data
//   fetch('https://api.github.com/orgs/nodejs')
// .then(response => response.json())
// .then(data => {
//   console.log(data) // Prints result from `response.json()` in getRequest
// })
// .catch(error => console.error(error))





// for the post data
let data = {
  first_name: 'John',
  last_name: 'Adams',
  job_title: 'Software Engineer'
};


//if data is string then we do not have to stringyfy the data;
const options = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
}


fetch('https://reqres.in/api/users',options)
  .then((response) =>{

    return response.json();
  })
  .then((data) =>{
    console.log(data);
  })


}


//calling the api
getApi();