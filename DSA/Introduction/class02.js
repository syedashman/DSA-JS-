// Write a program in which we print numbers in separate line upto the given input
function printNumbers(a) {
    if (a < 0) {
        console.log("Invalid Input")
    }
    for (let i = 0; i <= a ; i++) {
        console.log(i)
    }
}
printNumbers(5)