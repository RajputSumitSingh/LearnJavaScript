console.log("this is new");


let key = '5Entry_1';
localStorage.setItem(key, 'Value88');
// localStorage.clear();

localStorage.setItem(key, 'New Value');

// localStorage.clear();
// local storage is parmanent.
let myItem = localStorage.getItem(key);


// Create item:
let myObj = { name: 'Harry', language: 'JavaScript' };
localStorage.setItem(key, JSON.stringify(myObj));
// Read item:
let item = JSON.parse(localStorage.getItem(key));  //json.parse will convert the string of array into the array and give the elements.



//session storage is not parmanent. when we close the browser it will clear all the values.

let array = ['sumit','singh','hello','world'];
sessionStorage.setItem('sessionName', 'sHarry');
sessionStorage.setItem('sessionName2', 'sRohan');
sessionStorage.setItem('sessionSabzi', JSON.stringify(array));


let a = sessionStorage.getItem('sessionSabzi');
console.log(sessionStorage.getItem('sessionSabzi'));
