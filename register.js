let formContainer = document.getElementsByClassName("register-input-container")[0];
let continueButton = document.getElementById("continueButton")
let registerButton = document.getElementById("registerButton")
let isPopulated = false
let formFields = {}

function handleInput(e) {
    formFields = { ...formFields, [e.target.name]: e.target.value}
}

function registerUser(){
    if(localStorage.getItem("users")){
        let users = JSON.parse(localStorage.getItem("users"))
        users = [...users, formFields]
        localStorage.setItem("users", JSON.stringify(users))
        console.log(users)
    }
    else {
        let users = [formFields]
        localStorage.setItem("users", JSON.stringify(users))
        console.log(users)
    }
}

document.getElementsByClassName("register-input")[0].addEventListener("input", handleInput)

function createFormElements(){
    let fieldsArray = ["First Name", "Last Name", "Password"]

if(!isPopulated){
    for(let i = 0; i < fieldsArray.length; i++) {

    let div = document.createElement("div")
    div.classList.add("register-input")

    let label = document.createElement("label")
    label.textContent = fieldsArray[i]


    let input = document.createElement("input")
    input.addEventListener("input", handleInput)


    input.setAttribute("id", fieldsArray[i].split(" ").join("").toLowerCase())
    input.setAttribute("type",fieldsArray[i].split(" ").join("").toLowerCase())
    input.setAttribute("name", fieldsArray[i].split(" ").join("").toLowerCase())

    div.appendChild(label)
    div.appendChild(input)

    formContainer.insertBefore(div, continueButton)

    isPopulated = true;
    continueButton.style.display = "none"
    registerButton.style.display = "block"
    }
  }
}