import navbar from "../components/navbar.js";

let container = document.querySelector("#navbar");
container.innerHTML = navbar();


const data=[
    "Andhra Pradesh",
    "Maharatra",
    "Kerla",
     "Goa"
]

const stateNameRendering = (data)=>{
const select =document.querySelector("#stateName_select")


   data.map((el)=>{
    const option = document.createElement("option");

    option.innerText = el;
    option.value = el;


    select.append(option);
   })
}

 stateNameRendering(data)


 const carddetailsRendering = ()=>{
   const value =document.querySelector("#paymentMethod_select").value;
   const container = document.querySelector("#cardDetails_div");

   if(value !=="card"){

    container.innerHTML = null;
   }
   else{
       const html =`  <label for="">Card Number</label>
       <input type="text" id="cardNumber" >
       
       <label for="">CVV</label>
       <input type="text" id="cvv">
       
       <label for="">Expiry Date</label>
       <input type="date" id="expDate">
       
       <label for="">Card Holder Name</label>
       <input type="text" id=cardHolderName>`

       container.innerHTML = html
   }
 }
 const paymentSelect = document.querySelector("#paymentMethod_select");
 paymentSelect.addEventListener("change", carddetailsRendering)


//  const form = document.querySelector("#details__form");
//  form.addEventListener("submit", handlesubmit)

 const handlesubmit = (event)=>{
    //prevent default
    event.preventDefault();
    // console.log("I am clicking");

    // taking all value

    const name = document.querySelector("#name").value;
    const address1 = document.querySelector("#address1").value;
    const address2 = document.querySelector("#address2").value;
    const city = document.querySelector("#city").value;
    const state = document.querySelector("#stateName_select").value;
    const pin = document.querySelector("#pin").value;
    const phone = document.querySelector("#phone").value;
    const paymentMode = document.querySelector("#pymentMethod__select")
    // const cardNumber = document.querySelector("#cardNumber").value;
    // const cvv = document.querySelector("#cvv").value;
    // const expdate= document.querySelector("#expDate").value;
    // const cardholderName = document.querySelector("#cardholderName").value;

    //validation 
    let cardNumber;
    let cvv;
    let expDate;
    let cardHolderName;

    if(!name || !address1 || !address2 || !city || !state || !pin  ||  !phone  ||  !paymentMode  ) {
        alert(" Empty Input")
        return;

    }

    if(paymentMode === "card"){
        cardNumber = document.querySelector("#cardNumber").value;
        cvv = document.querySelector("#cvv").value;
        expDate= document.querySelector("#expDate").value;
        cardHolderName = document.querySelector("#cardHolderName").value;
    
        if(!cardNumber || !cvv || !expDate || !cardHolderName ){
         alert(" invalid card details");
         return;
        }
    }



    // making payload or data in obj

    const payload ={
        name,
        address1,
        address2,
        city,
        state,
        pin,
        phone,
        paymentMode
    }

    if(paymentMode === "card"){
        payload.paymentDetails ={
            cardNumber,
            cvv,
            expDate,
            cardHolderName
        }
    }
    const price =JSON.parse(localStorage.getItem("total"));
    payload.totalPrice = price;
    console.log(payload)
    // post request to store it on database
localStorage.setItem("orderdetails", JSON.stringify(payload));
window.location.href = "otp.html";
    
 }

 const form = document.querySelector("#details__form");

 form.addEventListener("submit", handlesubmit)