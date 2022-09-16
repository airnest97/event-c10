// function login(){
//     let email_address = document.getElementById("email").value
//     let password = document.getElementById("password").value

//     console.log("Email: ", email_address)
//     console.log("Password: ", password)
// }

let userInput = {
    email : "",
    password : ""
}

document.getElementById("email").addEventListener("input", (e) =>
{
    userInput[e.target.name] = e.target.value
} )

document.getElementById("password").addEventListener("input", (e) =>
{
    userInput[e.target.name] = e.target.value
} )

function clickHandler(){
    let {email, password} = userInput
    let user = {};
    if(email === "" || password === ""){
        alert("Please enter your details")
        return
    }
    else{
        if(localStorage.getItem("users")){
            let users = JSON.parse(localStorage.getItem("users"))
            for (let i = 0; i < users.length; i++){
                
                if(users[i].email === email){
                    user = users[i];
                }
            }
            if (Object.keys(user).length > 0){
                if(user.password === password){
                    alert("Welcome to Norbs Event")
                    return
                } else{
                    alert("Please enter a current password")
                    return 
                }
            } else{
                alert("Please enter a valid email address")
            }
           
        } else {
            alert("Register a user")
            return
        }
    }
}