// console.log("hello world");
alertDom('close');
function alertDom(value) {
  if(value == 'close'){
    $('.alert').alert(value);
  }else{
    showalert.classList.add('show');
  }
}

const username = document.getElementById('Username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// console.log(username, email, phone);
let validUsername = false;
let validEmail = false;
let validPhone = false;


//CONSTRAINTS FOR THE USERNAME
username.addEventListener('blur',()=>{

  // console.log("inside the username");
  let regex = /^[a-zA-z]([0-9a-zA-Z]){0,8}$/;   //$ dollar means must stop after given value.
  const str = username.value;

  if(regex.test(str)){
    console.log(regex.source, username);
    username.classList.remove('is-invalid');
    validUsername = true;

  }else{
    console.log("wrong");
    username.classList.add('is-invalid');
    validUsername = false;
  }
})



//CONSTRAINTS FOR THE EVENT EMAIL.
email.addEventListener('blur',()=>{

  regex = /^([_\-\.0-9a-z]+){5,9}@([_\-\.0-9a-z]+)\.([a-zA-Z]+)$/;
  const str1 = email.value;

  if(regex.test(str1)){
    console.log(regex.source, email);
    email.classList.remove('is-invalid');
    validEmail = true;
  }else{
    console.log("wrong");
    email.classList.add('is-invalid');
    validEmail = false;
  }
})


//CONSTRAINTS FOR THE PHONE
phone.addEventListener('blur',()=>{

  regex = /^[0-9]{10}$/;
  const str2 = phone.value;

  if(regex.test(str2)){
    console.log(regex.source, phone)
    phone.classList.remove('is-invalid');
    validPhone = true;
  }else{
    console.log("wrong");
    phone.classList.add('is-invalid');
    validPhone = false;
  }
  
})

const submit = document.getElementById('submit');
const showalert = document.getElementById('showalert');
  submit.addEventListener('click',(e)=>{
  e.preventDefault();//used for not relode after submit

  if(validUsername && validEmail && validPhone){

    showalert.classList.add('show');
    console.log('submitted');
    
    alertDom('dispose');
  }else{
    // alertDom('close');
  }
  // $('.alert').alert()
})