//fn we created before
//1. stateNameRendering
//2. card details rendering 
//3. Handle submit 

//Oops -> method
//Import 
import navbar from "../components/navbar.js";


//Data
const data = [
    "Andhra Pradesh",	
    "Arunachal Pradesh",
    "Assam",	
    "Bihar"	,
    "Chhattisgarh",	
    "Goa"	,
    "Gujarat",
    "Haryana",	
    "Himachal Pradesh",
    "Jharkhand"	,
    "Karnataka"	,
    "Kerala",	
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur"	,
    "Meghalaya",	
    "Mizoram",
    "Nagaland",	
    "Odisha",
    "Punjab",	
    "Rajasthan",	
    "Sikkim",	
    "Tamil Nadu",	
    "Telangana"	,
    "Tripura",	
    "Uttar Pradesh",	
    "Uttarakhand",	
    "West Bengal"
]    


// class Detail {
//     constructor(){

//     }

//     //method
//     handleSubmit(){

//     }
// }

// //Global 


// //After an event trigered




//Class
class Details {
    constructor(){

    }
    //Methods

    stateNameRendering(data){
         //Where ?
        const select = document.querySelector("#stateName__select");

        //Option tag 

        //How many time ? => data.length
        // map 
        data.map((el) =>{
            //Create Html element 
            const option = document.createElement("option");

            //Attribute
            option.innerText = el;
            option.value = el;

            //Event 

            //Append 
            select.append(option);

         })
    }

    cardDetailsRendering(){

        //User select CARD OR NOT
        const value = document.querySelector("#paymentMethod__select").value;
        const container = document.querySelector("#cardDetails__div");    
        if(value !== "card"){
            //Do nothing
            container.innerHTML = null;
        }
        else{
            //append input for card details

            //create html 

            //append

            const html = `<label for="">Card Number</label>
            <input type="text" id="cardNumber">

            <label for="">CVV</label>
            <input type="text" id="cvv">

            <label for="">Expiry Date</label>
            <input type="date" id="expDate" >

            <label for="">Card Holder Name</label>
            <input type="text" id="cardHolderName">`

            container.innerHTML = html
        // container.append(html)
    }

    }

    navbarRendering(){
        let container = document.querySelector("#navbar");
        container.innerHTML = navbar();
    }

    #checkCvv(cvv){
        if(cvv.length === 3){
            return true;
        }

        return false;

    }

    #isbasisDataPresent(name , address1 , address2 , city , state , pin , phone , paymentMode){

        if(!name || !address1 || !address2 || !city || !state || !pin || !phone || !paymentMode){
            alert("Empty Input");
            return false;
        }

        return true;

    }





    handleSubmit(name , address1 , address2 , city , state , pin , phone , paymentMode, cardNumber , cvv , expDate , cardHolderName){
        //validation check 
        //123
        const isValidationCheck = this.#checkCvv(cvv) && this.#isbasisDataPresent(name , address1 , address2 , city , state , pin , phone , paymentMode )
        //creatting paylod 

         //making payload or data in obj 
        // const payload = {
        //     name,
        //     address1,
        //     address2,
        //     city,
        //     state,
        //     pin,
        //     phone, 
        //     paymentMode
        // }
        this.name = name;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.pin = pin;
        this.phone = phone;
        this.paymentMode = paymentMode;    


        if(paymentMode === "card"){
            // payload.paymentDetails = {
            //     cardNumber,
            //     cvv,
            //     expDate,
            //     cardHolderName
            // }

            this.paymentDetails = {
                cardNumber,
                cvv,
                expDate,
                cardHolderName
            }
        }
        
        //Details
        //this.paymentDetails
        //this.constructor
        //this


        //adding total price
        const price = JSON.parse(localStorage.getItem("total"));
        this.totalPrice = price;

        //making post req or storing on ls
         //post request to store it on database / store it in local storage 
        localStorage.setItem("orderDetails" , JSON.stringify(this));

        //Redirecting if required
        window.location.href = "otp.html";

    }


}

//Create an object instance using the details class
const details = new Details();


//Calling methods that required

//Global 
details.navbarRendering()
details.stateNameRendering(data)

//adter an event triggerd 
const paymentSelect = document.querySelector("#paymentMethod__select");
paymentSelect.addEventListener("change" , ()=>{
    details.cardDetailsRendering()
} )


const form = document.querySelector("#details__form");

form.addEventListener("submit" , (event)=>{
    event.preventDefault()

    //Catching all value
    const name = document.querySelector("#name").value;
    const address1 = document.querySelector("#address1").value;
    const address2 = document.querySelector("#address2").value;
    const city = document.querySelector("#city").value;
    const state = document.querySelector("#stateName__select").value;
    const pin = document.querySelector("#pin").value;
    const phone = document.querySelector("#phone").value;
    const paymentMode = document.querySelector("#paymentMethod__select").value;

    //Condtionally calling methods in one events
    if(paymentMode !== "card"){
        details.handleSubmit(name , address1 , address2 , city , state , pin , phone , paymentMode);
        return;
    }

    if(paymentMode === "card"){
        const cardNumber = document.querySelector("#cardNumber").value;
        const cvv = document.querySelector("#cvv").value;
        const expDate = document.querySelector("#expDate").value;
        const cardHolderName = document.querySelector("#cardHolderName").value;
        details.handleSubmit(name , address1 , address2 , city , state , pin , phone , paymentMode, cardNumber , cvv , expDate , cardHolderName )
    }

} )


// details.navbarRendering()
// details.stateNameRendering()
















