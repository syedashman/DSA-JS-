// Write a program which print even number upto the given input

function even(x) {
    if (x <= 5) {
        console.log("Invalid Input")
        return
    }
    for (let i = 5; i <= x; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
even(5)
