// Create a LogIn Function, also check the format of email and password should be of
//six characters (and special characters e.g /, _)

// Data Structure:
// Array

        // JavaScript code to handle form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the email and password values
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Print the values to the console
        logIn(email, password);
        });


//object
//[{},{},{}]

const users = [
    {
        email: "umar@gmail.com",
        password: "umar123",
    },
    {
        email: "ashman@gmail.com",
        password: "ashman123",
    },
    {
        email: "shadan@gmail.com",
        password: "shadan123",
    },
];

function logIn(email, password) {
    if (!email) {
        console.log("You must enter the email before logIn");
        return;
    }
    if (!password) {
        console.log("You must enter the password before logIn");
        return;
    }

    let checkEmail = false;
    let checkAtTheRate = false;
    let checkAtTheDot = false;

    for (let i = 0; i < email.length; i++) {
        let value = email[i];
        if (value == "@") {
            checkAtTheRate = true;
        }
        if (value == ".") {
            checkAtTheDot = true;
        }
    }
    checkEmail = checkAtTheDot && checkAtTheRate;
    if (checkEmail) {
        //check password
        if (password.length >= 6 && password.length <= 12) {
            // if this record exist in database?
            // console.log("-------->", users);
        
let checkUser = false;
let checkPass = false;
            for (let i = 0; i < users.length; i++) {
                const element = users[i];
               if (password == element.password) {
                checkPass = true;
               }
                if (email == element.email) {
                    checkUser = true;
                }
                if (email == element.email && password == element.password) {
                    // login
                    console.log("You are successfully logged In!");
                    return;
                }

            }
            if (checkPass == false && checkUser == true) {
                console.log("The password you have entered is incorrect")
                return;
            }
            
                console.log("This user not found!");
            
            // for (let i = 0; i < users.length; i++) {
            //     const element = users[i]; 
            //     if ( email == element.email && password != element.password) {
            //         console.log("The password you have entered is incorrect")
            //         return;
            //     }
            // }
        } else {
            console.log(
                `Password is incorrect!. Your length of password is ${password.length}`
            );
        }
    } else {
        console.log("Email is incorrect");
        if (!checkAtTheDot) console.log("There is missing .");
        if (!checkAtTheRate) console.log("There is missing @");
    }
}
