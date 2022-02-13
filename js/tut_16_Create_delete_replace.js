console.log("Hello world");

var element= document.createElement("name");

let text = document.createTextNode("this is the created text node.");
element.appendChild(text);

element.className('childul');
element.id('a1');
element.setAttribute('style','background-color:red;')
element.innerText = 'this is a paragraph.';

let ul = document.querySelector('ul.this'); // this will select the value element of first child  and ul.this will select the ul element which having this class. 

ul.appendChild(element);


var paragraph = document.createElement("P");                
var text = document.createTextNode("This is a paragraph.");     
paragraph.appendChild(text);

console.log(paragraph);