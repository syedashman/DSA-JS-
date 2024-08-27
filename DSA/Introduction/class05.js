//Write a program to which takes an input and tell that the the number is even or odd?

function evenOrOdd(x) {
    if (x < 0) {
        console.log("Please enter positive number")
        return
    }
    if (x % 2 == 0) {
        console.log("This number is even")
    }
    else console.log("This number is odd")
    
}
evenOrOdd(0)