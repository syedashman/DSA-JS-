// Create a LogIn Function
function logIn(email,password) {
    if (!email ) {
        console.log("You must enter the email before logIn")
    }
    if (!password ) {
        console.log("You must enter the password before logIn")
    }
    if (email && password) {
        console.log("You successfully logIn")
        alert("Congratulation! ")
    }
}
console.log(logIn("syedashman@gmail","adada"))