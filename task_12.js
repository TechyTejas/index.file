prnt.addEventListener('submit', onsubmit);
function onsubmit(e){
  e.preventDefault();
  let name =document.getElementById('name').value;
  console.log(name);
  let email =document.getElementById('exampleInputEmail1').value;
  console.log(email);
  let number =document.getElementById('number').value;
  console.log(number);
  
  let obj={name,email,number};
  // localStorage.setItem(obj.email,JSON.stringify(obj))


  let listItem =document.getElementById("items");
      let newItem =document.createElement('li');
      newItem.appendChild(document.createTextNode(JSON.stringify(obj)))
      //listItem.appendChild(newItem);
     // console.log(newItem.textContent)

      localStorage.setItem(name,newItem.textContent)
}

