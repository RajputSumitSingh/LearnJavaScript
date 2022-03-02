// console.log("hello world");

const username = document.getElementById('Username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// console.log(username, email, phone);


username.addEventListener('blur',()=>{

  // console.log("inside the username");
  let regex = /[^0-9]([bc]){5}/;
  const str = username.value;

  if(regex.test(str)){
    console.log(regex.source, username);
    username.classList.remove('is-invalid');

  }else{
    console.log("wrong");
    username.classList.add('is-invalid');
  }
})


email.addEventListener('blur',()=>{

  console.log("inside the email");
})


phone.addEventListener('blur',()=>{

  console.log("inside the phone");
})