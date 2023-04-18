


let toDoList = [
    {
        toDo: "Go shopping",
        
    },
    {
        toDo: "Go to the gym",
        
    },
    {
        toDo: "Play with kids",
        
    }
];
// Display all list
function showToDoList()
{
    let html='';
    //loop over products
    for (let toDo of toDoList){
        html+=`
        <div class="list">
        <h2>${toDo.toDo}</h2>
        <button class="remove" data-toDo-task="${toDo.toDo}">remove</button>
        <hr>
        </div>

        `;
    }
    //Add html to the document, toDo div
    document.querySelector('.tasks').innerHTML=html;
}



//Handle all click events
function handleEvents(){
    // Add event listener to entire body an listen for clicks
    document.querySelector('body').addEventListener('click',function(event){
        //Get the closest  product-class to where we clicked 
        let taskClicked =event.target.closest('.list');
       
        //If you clikc somewhere unrelated, we just return
        if(!taskClicked)
        {return;}
        // If the closest element is the remove button
        let removeButton=event.target.closest('.remove');
        console.log("remove button");
        if(removeButton){
            //Get the attribute data-product-name
        let taskName = removeButton.getAttribute('data-toDo-task');
        // Remove product by name from array
            //console.log(taskName);
            console.log(toDoList);
            toDoList = toDoList.filter((task) =>  task.name!==taskName);
            taskClicked.remove();
            
        }
    });
        //Event listener for the add product form that listens for submit, and not click
    let addTaskForm = document.querySelector('#add-task-form');
    addTaskForm.addEventListener('submit', function(event){
        //Dont let the site reload when the  submit is clicked
        //event.preventDefault();
        
        //get the values form the form
        let toDo = document.querySelector('#task').value;
       
         //Error Handling,checks that all fields that are checked out
        if(toDo){
            //New product
            let newtoDo={
                toDo: toDo,
                
             };
             event.preventDefault();
            // Add the product to the products array
            toDoList.push(newtoDo);

            //Reset the form and show new div
            let tasksDiv= document.querySelector('.tasks');
            tasksDiv.innerHTML='';
            //Render the products again
            showToDoList();
            console.log(toDoList); //For debugging 
            //Reset the form
            addTaskForm.reset();
        }else{
            alert ('please fill in all fields!');
        }


    });

    
}
    
showToDoList()
handleEvents();
    
            
/*function handleEvents()
{
    //add event listeners to entire body and listen for clicks
    document.querySelector('body').addEventListener('click', function(event)
    {
        let productclicked=event.target.closest('.product');
        //if you click somewhere unrelated, we just return
        if(!productclicked)
        {
            return;
        }
        //get the info div from the clicked product
        let infoproduct =productclicked.querySelector('.info');
        infoproduct.style.display = infoproduct.style.display === 'block' ? 'none':'block';

        //if the closest element is the remove button
        let removeButton =event.target.closest('.remove');
        if(removeButton)
        {
            //get the attribute data product name
            let productName = removeButton.getAttribute('data-product-name');
            //remove products bby name  from array ,using filter
            products = products.filter((product)  => product.name!==productName);
            productclicked.remove();

        }
    });

        //event listener for the add product from that listens foor submit kand nnot click
        let addProductionForm = document.querySelector('#add-product-form');
        addProductionForm.addEventListener('submit',function(event)
        {//dont let the site reload when submit is clicked
            event.preventDefault();
            let name =document.querySelector('#name').value;
            let description= document.querySelector('#description').value;
            let price = Number(document.querySelector('#price').value);

            //error handling, check all the fields are filled out
            if(name && description && price )
            {
                //new product
                let newproduct =

                {
                    name:name,
                    description:description,
                    price:price

                };
                //add the product to the products array
                products.push(newproduct);

                //reset the form and show new div
                let productsdiv= document.querySelector('.products');
                productsdiv.innerHTML= ' ';
                //render thhe products again

                showProducts();
                console.log(products);
                //reset the form
                addProductionForm.reset();

            }
            else
            {
                alert('Please fill in all the fields');

            }


        });

    
}
showProducts();
handleEvents();*/