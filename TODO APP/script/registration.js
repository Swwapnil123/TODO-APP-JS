import navbar from "../components/navbar.js";

let container = document.querySelector("#navbar");
container.innerHTML = navbar();


//Catch the from and add event to it 
let form = document.querySelector("#registration__form").addEventListener("submit" , handleSubmit );

//Defaine the fn
function handleSubmit (event){
    //prevent default things
    event.preventDefault();

    //Get the values of Input
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let mob = document.querySelector("#mob").value;
    let password = document.querySelector("#password").value;


    //Add some validation
    if( !name ||  !email || !mob || !password){
        alert("Empty Input");
        return;
    }



    //create the payload 
    // {
    //     "email": "eve.holt@reqres.in",
    //     "password": "pistol"
    // }

    email = "eve.holt@reqres.in";
    password = "pistol";


    let payload = {
        email,
        password, 
    }

  

    //Post request 
    //link - > https://reqres.in/api/register

    //Two types -> .then. catch , async await 
    //post 
    //1. Method Name (POST , PATCH , DELETE )
    //2. Headers 
    //3. Data
    fetch("https://reqres.in/api/register", {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(payload)
    } ).then((res) =>{
        //Pending 
        return res.json();

    }).then((res) =>{
        //Fulfield
        console.log(res);
        alert(`Success- ${res.token}`);

        //Move / redirect user to login page 
        window.location.href = "login.html";
        

    }).catch((err) =>{
        //Not fulfield / rejected
        console.log(err);
        alert("Not able to register");
    })


    //end gole is to make a POST Req 
}