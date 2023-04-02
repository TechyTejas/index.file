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
//headerTitle.innerText="okay";
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h2>Item lister</h2>';  // we put html code into html code bu using this
//headerTitle.style.borderBottom='solid 3px #000';
// header.style.borderBottom='solid 3px #000';  //now here we apply border to its

// //GET_ELEMENT_BY_CLASS_NAME
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='tomato';

// //gives error
// //items[1].style.backgroundColor='#f4f4f4';

// for(var i=0;i<items.length;i++){
//     items[i].textContent='Item '+i;
//     items[i].style.backgroundColor='#f4f4f4';
//     items[i].style.fontWeight='bold';
// }

//GET_ELEMENT_BY_TAG_NAME
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='tomato';

// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
//     li[i].textContent='Item '+i;
//     li[i].style.backgroundColor='tomato';
// }


// // QUERYSELECTOR  //it is only use for one item if you want to use it for more item then apply all at the end
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='Hello World'

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item=document.querySelector(".list-group-item");
// item.style.color="red";

// var lastItem=document.querySelector(".list-group-item:last-child");
// lastItem.style.color="blue";

// var secondItem=document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color="coral";

//QUERYSELECTORALL//
// var titles=document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent="Hello";

// var odd=document.querySelectorAll("li:nth-child(odd)");
// var even=document.querySelectorAll("li:nth-child(even)");

// for(var i=0;i<odd.length;i++){
    
//     odd[i].style.backgroundColor="#f4f4f4";
//     even[i].style.backgroundColor="#ccc";
    
// }
// task
//even[0].style.color="green";
//odd[1].style.visibility = "hidden"

// TRAVEERSING THE DOM
var itemlist=document.querySelector('#items');
//parentnode
// console.log(itemlist.parentNode);  // thiw will give parent node of items
// itemlist.parentNode.style.backgroundColor="pink";
// // we want to get parentNode of any dom ele we use over it again and again
// console.log(itemlist.parentNode.parentNode.parentNode);

//parenElement
// The parentNode method will always return the parent, but parentElement will return null if the parent happens to be something other than an element
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor="pink";
// console.log(itemlist.parentElement.parentElement.parentElement);

//childnode
//console.log(itemlist.childNodes);
//Element.children returns only element children, while Node.childNodes returns all node children.
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor="yellow";

//FirstChild
// console.log(itemlist.firstChild);
// //firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent="Hello 1";

//LastChild
// console.log(itemlist.lastChild);
// itemlist.lastElementChild.textContent="Hello 4";

//nextSibling
// console.log(itemlist.previousSibling);
//previousElementSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color="green";
// itemlist.previousElementSibling.textContent="Hellow World"

// createElement
//Create a div
var newDiv=document.createElement('div');
//Add class
newDiv.className='Hello';
//Add id
newDiv.id='Hello1'
//Add attribute
newDiv.setAttribute("title","Hello Div");
//Create text node
var newDivText=document.createTextNode("Hello World");
//Add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);  //noget

// com7_2
let parentnode = document.getElementById('items');
parentnode.innerHTML = '<li class="list-group-item">Hello World</li>' + parentnode.innerHTML