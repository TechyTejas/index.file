let form =document.getElementById("addForm");
    let itemList =document.getElementById('items');

    //add Button 
    form.addEventListener('submit',addItem);

    //Revove button
    itemList.addEventListener('click',removeItem);

    //Edit Button
    itemList.addEventListener('click',editItem);

    //edit function
    function editItem(e){
      console.log('edit');
    }

    //Remove Function
    function removeItem(e){
      if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
          let li =e.target.parentElement;
          itemList.removeChild(li);
        }
      }
    }

    //add item
    function addItem(e){
      e.preventDefault();

      //get input value
      let newItem =document.getElementById('item').value;

      //create new li element
      let li =document.createElement('li');
      li.className ="list-group-item";

      //append input value into li element
      li.appendChild(document.createTextNode(newItem))


      //Create Delete Button
      let deleteBtn = document.createElement('button');
      deleteBtn.className ='btn btn-danger btn-sm float-right delete';

      //append 'x' into deleteBtn
      deleteBtn.append(document.createTextNode('x'))

      li.appendChild(deleteBtn);


      //Create Edit Button
      let editBtn = document.createElement('button');
      editBtn.className ='btn btn-primary btn-sm float-right delete';

      //append 'E' into EditBtn
      editBtn.append(document.createTextNode('E'))

      li.appendChild(editBtn);

      //append li into itemlist
      itemList.appendChild(li);
      console.log(li.innerHTML)
    }
