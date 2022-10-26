import navbar from "../components/navbar.js";

let container = document.querySelector("#navbar");
container.innerHTML = navbar();

let breedName = JSON.parse(localStorage.getItem("breed"));
console.log(breedName)
getImage()

async function getImage(){
    if(!breedName){
        return;
    }


    try{
        let res = await fetch(`https://dog.ceo/api/breed/${breedName}/images`);
        let data = await res.json();
        console.log(data.message);
        append(data.message);
    }
    catch(err){

    }
}

function append (data){

    let mainDiv = document.querySelector("#breedImage__div");
    mainDiv.innerHTML = null;
    data.map((el) =>{
        //Creating 
        let div = document.createElement("div");
        let img = document.createElement("img");

        //SAttribute
        img.src = el;

        //Event

        //Append
        div.append(img);
        mainDiv.append(div);
    })
}