let userInput = {
    firstName: "Man",
    lastName: "Woman",
    getFullName: function () {
        return this.firstName + " " + this.lastName
    },
    createUsername: function () {
        console.log("@" 
        + this.firstName.charAt(0) 
        + this.lastName.charAt(this.lastName.length - 1))
    }
}
console.log(userInput.getFullName())
console.log(userInput.createUsername())