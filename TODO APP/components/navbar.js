
import loginCheck from "../utils/loginCheck.js"

 function navbar (length=0){

    let caerArr=JSON.parse(localStorage.getItem("cart"))

    if(caerArr){
        length=caerArr.length;
    }
   
    const status =loginCheck();
    if(!status){
        length = null;
    }

    return`<div class="navbar__div">
    <div>
    <a href="index.html">
    <h1>App Name</h1></a>
    </div>

    <div>
        <ul>

            <li>
                <a href="index.html">Todo</a>
            </li>
            <li>
                <a href="product.html">Product</a>
            </li>
            <li>
                <a href="registration.html">Register</a>
            </li>
            <li>
            <a href="dog.html">Dogs</a>
           </li>
           <li>
             <h4> 
              <a href="cart.html"> ${length === null ? `Cart`: `Cart: ${length}` } </a>
              </h4>
            </li>
        </ul>
    </div>
</div>`
}

//t o
export default navbar;

