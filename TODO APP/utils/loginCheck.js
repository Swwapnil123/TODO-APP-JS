// function loginCheck(){

// }

// arrow fn

const loginCheck = () =>{
      
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token){
        return false;
    }
    return true
}

export default loginCheck;

// Not alow you to reassign
//let

//const status = loginCheck()

