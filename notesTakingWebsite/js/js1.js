// console.log("helo world");
showNotes();

let addBtn = document.getElementById('addBtn').addEventListener('click', function (e) {

  let addText = document.getElementById('addText');
  let addTitle = document.getElementById('titleInput');
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let myObject = {
    title : addTitle.value,
    text : addText.value
  };
  notesObj.push(myObject);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addText.value = '';
  addTitle.value = '';
  // console.log(notesObj);
  showNotes();
});


// For showing the data of notes into the DOM

function showNotes() {

  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  html = '';
  notesObj.forEach(function (element, index) {

    html += `<div class="noteCard card my-3 mx-auto" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"> ${index+1  +". "+ element.title}</h5>
      <p class="card-text">${element.text}</p>
      <br>
      <a  style="position:absolute; bottom : 0px;" class="btn btn-primary" id="deleteNotes" onClick="deleteNote(${this.id})">Delete Notes</a>
    </div>
  </div>
    `;

  });

  let noteselement = document.getElementById('showNotes');  // used for showing the card.

  if (notesObj != 0) {
    noteselement.innerHTML = html;
  } else {
    noteselement.innerHTML = `<center class="my-5"><h3>There is nothing to showing</h3></center>`;
  }


}

// FOR DELETING THE NOTES FRMO THE DOM

function deleteNote(index){

  let notes = localStorage.getItem("notes");
  // console.log("delete : ",index);

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index,1);  //splice function for deleting the element 1
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();

}


//for searching the item
let searchItem = document.getElementById('searchItem');
searchItem.addEventListener('input',function(){

  let input = searchItem.value;
  // console.log(input);

  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function(element){
    let cardText = element.getElementsByTagName('p')[0].innerText;
    let cardTitle = element.getElementsByTagName('h5')[0].innerText;

    if(cardText.includes(input) || cardTitle.includes(input)){
      element.style.display = "block";
    }else{
      element.style.display = "none";

    }
  });
});

