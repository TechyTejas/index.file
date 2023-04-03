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
  localStorage.setItem('userdetails',JSON.stringify(obj))
}

