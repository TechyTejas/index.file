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

//GET_ELEMENT_BY_CLASS_NAME
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='tomato';

//gives error
//items[1].style.backgroundColor='#f4f4f4';

for(var i=0;i<items.length;i++){
    items[i].textContent='Item '+i;
    items[i].style.backgroundColor='#f4f4f4';
    items[i].style.fontWeight='bold';
}