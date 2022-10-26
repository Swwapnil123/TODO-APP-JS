import navbar from "../components/navbar.js";

let container = document.querySelector("#navbar");
container.innerHTML = navbar();

getBreedName();



async function getBreedName(){
    try{
        let response = await fetch(`https://dog.ceo/api/breeds/list/all`);
        let data = await response.json()
        console.log(data.message);
        //console.log(typeof(data.message));

        //Data processing
        let arr = Object.keys(data.message);
        //[affenpinscher , ]

        // let array = [];
        // for(let key in data.message){
        //     array.push(key);
        // }

        

        console.log(arr)
        append(arr);


    }
    catch(err){
        console.log(err);
    }
}


function append(data){
    let mainDiv = document.querySelector("#breedName__div");
    mainDiv.innerHTML = null;
    data.map((el) =>{
        //html create 
        let div = document.createElement("div");
        div.innerText = el;

        //attribute

        //Event 
        div.addEventListener("click" , () =>{
            //storing el
            localStorage.setItem("breed" , JSON.stringify(el));

            //redirect
            window.location.href = "puppy.html"
        })


        //Append
        mainDiv.append(div)
    })
}
