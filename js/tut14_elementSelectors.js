console.log("hello world");

let element = document.getElementById("first_id");

// element = element.className;
// element = element.innerText;
// element = element.parentNode;
// element = element.childNodes;

element.style.color = 'red';
element.style.backgroundColor = 'black';

element.innerText = "my name is sumit";
element.innerHTML = "<h1>bold</h1>";


console.log(element.innerHTML);
console.log(element.innerText);
// console.log(element);