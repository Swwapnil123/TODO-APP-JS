import navbar from "../components/navbar.js";

let container = document.querySelector("#navbar");
container.innerHTML = navbar();

//select all input first 
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");

input1.focus()

input1.addEventListener( "input" , ()=>{
    //chack
    if(input1.value.length === 1){
        input2.focus()
    }

} )


input2.addEventListener( "input" , ()=>{
    //chack
    if(input2.value.length === 1){
        input3.focus()
    }

    if(input2.value.length === 0){
        input1.focus()
    }
} )

input3.addEventListener( "input" , ()=>{
    //chack
    if(input3.value.length === 1){
        input4.focus()
    }

    if(input3.value.length === 0){
        input2.focus()
    }
} )

input4.addEventListener("input" , () =>{
    if(input4.value.length === 0){
        input3.focus()
    }
})

const handleClick = () =>{
    //collect value
    const otp = input1.value + input2.value + input3.value + input4.value;
    //1234
    
    //get request from your server -> original otp
    const originalOtp = "1234";


    //check if its matched or not
    if(otp === originalOtp){
        alert("Success");

        const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
        
        orderDetails.paymentStatus = "Success";
        console.log(orderDetails);

        localStorage.setItem("finalOrderSuccess" , JSON.stringify(orderDetails))
        
        localStorage.removeItem("cart");
        localStorage.removeItem("orderDetails");

        //Show the ui to the user on same page 
        //where ? 
        let otpDiv = document.querySelector("#otp__div");
        otpDiv.innerHTML = null;

        //what ?
        const h1 = document.createElement("h1");
        h1.innerText = "Thank you for shoping with us";
        h1.style.textAlign = "center";

        //append 
        otpDiv.append(h1);



        setTimeout(()=>{
            
            window.location.href = "product.html";

        }, 4000)





        return;
    }

    alert("Failure")

}


const button = document.querySelector("#submit__button")
button.addEventListener("click" , handleClick )



