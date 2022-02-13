// console.log("my name is sumit singh");

class Books{
//make the Books constructor
  constructor(name,author,type){

  this.name = name;
  this.author = author;
  this.type = type;
};

}

//display class
class Display{


//prototype of display
  add(book) {
  // console.log("data is added");
  let notes = localStorage.getItem("notes");
  if(notes == null){
    var arr=[];
    // let myObj={};
}else{
  var arr = JSON.parse(notes);
}

   let myObj = {
      name : book.name,
      author : book.author,
      type : book.type
    };
    arr.push(myObj);
    localStorage.setItem("notes",JSON.stringify(arr));

  
    let tableBody = document.getElementById('tableBody');
    let uiString = "";

  arr.forEach(function(element){
    

     uiString = `<tr>
                        <td>${element.name}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                    </tr>`;
                    tableBody.innerHTML += uiString;
    
  });

  // let tableBody = document.getElementById('tableBody');
  // let uiString = `<tr>
  //                     <td>${book.name}</td>
  //                     <td>${book.author}</td>
  //                     <td>${book.type}</td>
  //                 </tr>`;
  // tableBody.innerHTML += uiString;
  
};

clear() {
  let library = document.getElementById('library');
  library.reset();
}

  checkConfidential(book){

  if(book.name.length >= 3 && book.author.length >= 3){
    return true;
  }else{
    return false;
  }
};

  validate(type,displayMessage){

  let message = document.getElementById('message');
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${type}!</strong> ${displayMessage}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

setTimeout(function () {
  message.innerHTML='';
},5000);


};

}


let libraryForm = document.getElementById('library');

libraryForm.addEventListener('submit',libraryFormsubmit);

function libraryFormsubmit(e){
  
  console.log("done"+e);

  let name = document.getElementById('idName').value;
  let author = document.getElementById('idAuthor').value;
  let type;
  let fiction = document.getElementById('idFiction');
  let computer = document.getElementById('idComputer_Programming');
  let sumit = document.getElementById('idSumit');

  if(fiction.checked){
    type = fiction.value;
  }else if(computer.checked){
    type = computer.value;
  }else if(sumit.checked){
    type = sumit.value;
  }

  let book = new Books(name,author,type);
  console.log(book);
  
  let display = new Display();



  if(display.checkConfidential(book)){
  display.add(book);
  display.clear();
  display.validate("success","you successfully data uploaded");
  }else{
    display.validate("danger","you are not entered data in correct way");
  }

  e.preventDefault();

 
}