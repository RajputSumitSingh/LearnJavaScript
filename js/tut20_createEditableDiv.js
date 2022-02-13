
// creating the new div element.
let divElement = document.createElement('div');


let dataComingFromLocal = localStorage.getItem('text'); // takin data from the local storage.
let text;

if(dataComingFromLocal == null){
  text = document.createTextNode("Enter any data");
}else{
  text = document.createTextNode(dataComingFromLocal); 
}


divElement.appendChild(text);


// now  entering the attrubute and id and class name into the particular division tag.
divElement.setAttribute('id','elem');         //id name
divElement.setAttribute('class','class1');    //class name
divElement.setAttribute('style','border:2px black solid; width : 154px; margin: 34px; padding: 23px;');   //adding some style

//selecting the element with container class from dom.
let container = document.querySelector('.container');


//Inserting the new maked division tag with data into the selected container from the dom.
container.insertAdjacentElement("beforeBegin" , divElement);//Arguments : 'beforeBegin', 'afterBegin', 'beforeEnd', or 'afterEnd'.


//now editing.
let edit = document.getElementById('elem');

edit.addEventListener('click',function(){

  let count = document.getElementsByClassName('textarea').length;

  if(count == 0){
  let html = `<textarea class="textarea form-control" id="textarea" rows="3"></textarea>`;
  divElement.innerHTML = html;
  }

  let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
      elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    });

});





