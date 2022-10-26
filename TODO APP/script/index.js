
//using navbar from navbar.js
import navbar from "../components/navbar.js";

let container = document.querySelector("#navbar");
container.innerHTML = navbar();

// loginCheck()









let todoArr =  JSON.parse(localStorage.getItem("todos")) || [];

//[{} , {} , {}]
//map , filter 



appendTodo();

let button = document.querySelector("#addTodo__button").addEventListener("click" , handleClick )


function handleClick(){
    //alert("I am clcked")


    let value = document.querySelector("#todo__input").value;

    // console.log(value)

    if(!value){
        alert("Type Something");
        return;
    }



    //Create the payload 
    //payload -> data
    let payload = {
        todo : value,
        status: false,
        id: Date.now() + value 
    }


    todoArr.push(payload);
    localStorage.setItem("todos" , JSON.stringify( todoArr ) );
    // window.location.reload();
    appendTodo();

}



function appendTodo () {

    let container = document.querySelector(".allTodo__div");

    container.innerHTML = null;
    todoArr.map((el, i) =>{
        //Creating the html tag
           let mainDiv = document.createElement("div");
           let todoDiv = document.createElement("div");
           let toggleDiv = document.createElement("div");
           let deleteDiv = document.createElement("div");
           
           let todoH3 = document.createElement("h3");
           let toggleButton = document.createElement("button");
           let deleteButton = document.createElement("button");

           


        //Adding attributes
        todoH3.innerText = el.todo;
        
        if(el.status){
            toggleButton.innerText = "Done";
            toggleButton.style.backgroundColor = "green"
        }
        else{
            toggleButton.innerText = "Not Done"
            toggleButton.style.backgroundColor ="red";
        }

        deleteButton.innerText = "Delete";


        //Click Events
        toggleButton.addEventListener("click" ,() =>{
            updateTodo(el.id);
        })
        
        deleteButton.addEventListener("click" , () =>{
            deleteTodo(el.id)
        })



        //Styling 

        //Append 
        todoDiv.append(todoH3);
        toggleDiv.append(toggleButton);
        deleteDiv.append(deleteButton);
        mainDiv.append(todoDiv , toggleDiv , deleteDiv);
        container.append(mainDiv);
    })



}


function updateTodo (id) {
    //console.log(id)
    //alert("I am clicked")

    //Search the array and find the respective object 


    //update 
    //{ status: true }

    //Nothing 

    //{ status: false }

    //[ {} , {} ,  {  }]
    todoArr = todoArr.map((el, i) =>{
        if(el.id === id){
            //We can find our requred obj
            return { ...el ,  status: !el.status  }
        }
        else{
            //No math
            return el;
        }
    })

    localStorage.setItem("todos" , JSON.stringify(todoArr)); 
    appendTodo()   
    //console.log(updatedArr);



}


function deleteTodo (id) {
    //Identify the obj

    todoArr = todoArr.filter((el) =>{
       return el.id != id;
    })
    localStorage.setItem("todos" , JSON.stringify(todoArr)); 
    appendTodo() 

}