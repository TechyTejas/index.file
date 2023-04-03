let form =document.getElementById("addForm");
let itemList =document.getElementById('items');
let filter=document.getElementById('filter');    

    //FOrm submit Event
    form.addEventListener('submit',addItem);

    //Delte Event
    itemList.addEventListener('click',removeItem);

    //filter EVent
    filter.addEventListener('keyup',filterItems)

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
      var newItem2 = document.getElementById('item2').value;

      //create new li element
      let li =document.createElement('li');

      //Add class
      li.className ="list-group-item";

      //append input value into li element
      li.appendChild(document.createTextNode(newItem+' '+newItem2))


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

    // Filter items
    // Filter Items
    function filterItems(e) {
      // convert text to lowercase
      var text = e.target.value.toLowerCase();
      // Get lis
      var items = itemList.getElementsByTagName('li');
      // Convert to an array
      Array.from(items).forEach(function (item) {
          var itemName = item.firstChild.textContent;
          
          
          if (itemName.toLowerCase().indexOf(text) != -1) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  }