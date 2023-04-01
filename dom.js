// console.dir(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='King Tejas'; // look at the keyword "textContent"
//GETELEMENTBYID//

var headerTitle=document.getElementById("header-title");
var header=document.getElementById("main-header");  //here we store main header
console.log(headerTitle);
// headerTitle.textContent="Hello";
// headerTitle.innerText="okay";
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>';  // we put html code into html code bu using this
//headerTitle.style.borderBottom='solid 3px #000';
header.style.borderBottom='solid 3px #000';  //now here we apply border to its