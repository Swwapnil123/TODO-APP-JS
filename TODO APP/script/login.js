
import navbar from "../components/navbar.js";

let container = document.querySelector("#navbar");
container.innerHTML = navbar();


//
let from = document.querySelector("#login__form").addEventListener("submit" , handleLogin );

function handleLogin (event) {
    event.preventDefault();
    // console.log("Clicked")

    //catch the value
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;   

    //validation
    if(!email || !password){
        alert("Empty Input");
        return
    }

    email = "eve.holt@reqres.in";
    password = "cityslicka";

    //payload
    let payload = {
        email , 
        password
    }

    //post req
    //creating a async fun
    //Creating try catch block to handle succes and error
    //use featch and use await key 
    loginApi(payload);

}


async function loginApi (payload) {
    try{
        let response = await fetch("https://reqres.in/api/login", {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        let data = await response.json();

        console.log(data);
        alert("Success");
        localStorage.setItem("token" , JSON.stringify(data) );
        window.location.href = "product.html";

    }catch(err){
        console.log(err);
        alert("Not match");
    }
}

