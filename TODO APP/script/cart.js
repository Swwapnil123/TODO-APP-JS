
import navbar from "../components/navbar.js";
import loginCheck from "../utils/loginCheck.js";

const status = loginCheck();
console.log(status)
if(!status){
    // alert("Not logged in");
    window.location.href = "login.html";
}







function renderCartLength(cart){

    let length = cart.length;

    let container = document.querySelector("#navbar");
    container.innerHTML = navbar(length);

}





let cartArray = JSON.parse(localStorage.getItem("cart"));
renderCartLength(cartArray);

append(cartArray);
totalPrice()




function append(data){

    let container = document.querySelector("#cartProducts__div");

    container.innerHTML = null;

    data.map((el) =>{
        //Creating html element
        // console.log(el)
        const { qty , image: srcImage , category } = el;

        let mainDiv = document.createElement("div");
        let imageDiv = document.createElement("div");
        let contentDiv = document.createElement("div");
        let image = document.createElement("img");
        let categoryP = document.createElement("p");
        let priceP = document.createElement("p");
        let buttonDiv = document.createElement("div");
        let button = document.createElement("button");
        let cartButton = document.createElement("button");
        let quantityP = document.createElement("p");
        let incrementQty = document.createElement("button")
        let decrementQty = document.createElement("button")


        //Sttributes or value
        image.src = srcImage;
        categoryP.innerText = category;
        priceP.innerText = el.price
        button.innerText = "BUY";
        cartButton.innerText = "Remove Item"

        cartButton.style.backgroundColor = "teal"
        button.style.backgroundColor = "red"
        mainDiv.style.border = "1px solid white"
        mainDiv.style.paddingBottom = "1rem"

        quantityP.innerText =`Quantity-${qty}`;
        incrementQty.innerText = "+";
        decrementQty.innerText = "-";

        incrementQty.style.background = "green";
        decrementQty.style.background = "red";

        incrementQty.addEventListener("click" , ()=>{
            handleQuantity(el, `+`);
        })

        decrementQty.addEventListener("click" , () =>{
            handleQuantity(el, `-`);
        })



        cartButton.addEventListener("click" ,() =>{
            handleRemoveFromCart(el)
        })

        //Event listenee
        // button.addEventListener("click" , buyButtonClick )
        // cartButton.addEventListener("click" , () =>{
        //     handleAddToCart(el);
        // } )


        imageDiv.append(image);
        buttonDiv.append( cartButton , incrementQty , decrementQty);
        contentDiv.append(categoryP , priceP, quantityP , buttonDiv);
        mainDiv.append(imageDiv , contentDiv);

        //Append
        container.append(mainDiv);
    })


}


function handleRemoveFromCart (data) {
    console.log(data)

    cartArray = cartArray.filter((el)=>{
        if(el.id != data.id){
            return el;
        }
    })

    localStorage.setItem("cart" , JSON.stringify(cartArray));

    append(cartArray);
    renderCartLength(cartArray)
    totalPrice()

    // console.log(cartArray);
}



function totalPrice(){
    //Access whats present in the cart
    let sum = 0;

    cartArray.map((el) =>{
        sum = sum + el.price * el.qty;
        console.log(el)
    })

    console.log(sum)

    //Catch the span 
    let span = document.querySelector("#totalPrice__span");


    //give text content to it
    span.innerText = Math.round(sum);

    localStorage.setItem("total" , JSON.stringify(Math.round(sum)));

}


const handleQuantity = (data , type ) =>{
    if(type === "+"){

        if(data.qty === 5){
            alert(`No more product than 5`);
            return;
        }

        data.qty = data.qty + 1;

        append(cartArray);
        localStorage.setItem("cart" , JSON.stringify(cartArray));
        totalPrice()

    }
    else{

        if(data.qty === 1){
            alert(`Quantity can't be less than 1`)
            return;
        }

        data.qty = data.qty - 1;
        append(cartArray);
        localStorage.setItem("cart" , JSON.stringify(cartArray));
        totalPrice()
    }
}

//by ref

let button = document.querySelector("#detailsPage__button")

button.addEventListener("click" , ()=>{
    window.location.href = "details.html";
})