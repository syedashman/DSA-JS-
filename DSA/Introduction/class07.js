// Write a program the calculate income tax

function incomeTax(x) {
    if (!x && x==0) {
        console.log("Please enter valid input")
        return
    }
    if (x < 50000) {
        console.log("No Tax")
    }
    if (x >= 50000 && x<=100000) {
        console.log("You have to pay 2.5% tax")
        let tax = x * ( 2.5 / 100 )
        console.log(`Your tax on salary ${x} is ${tax.toFixed(2)} `)
        let netSalary = x - tax;
        console.log(`Your net salary is ${netSalary.toFixed(2)}`)
        return
    }
    if (x > 100000 && x<=200000) {
        console.log("You have to pay 12.5% tax")
        let tax = x * ( 12.5 / 100 )
        console.log(`Your tax on salary ${x} is ${tax.toFixed(2)} `)
        let netSalary = x - tax;
        console.log(`Your net salary is ${netSalary.toFixed(2)}`)
    }
    if (x > 200000 && x<=300000) {
        console.log("You have to pay 22% tax")
        let tax = x * ( 22 / 100 )
        console.log(`Your tax on salary ${x} is ${tax.toFixed(2)} `)
        let netSalary = x - tax;
        console.log(`Your net salary is ${netSalary.toFixed(2)}`)
    }
    if (x > 300000 && x<=500000) {
        console.log("You have to pay 27.5% tax")
        let tax = x * ( 27.5 / 100 )
        console.log(`Your tax on salary ${x} is ${tax.toFixed(2)}`)
        let netSalary = x - tax;
        console.log(`Your net salary is ${netSalary.toFixed(2)}`)
    }
    if (x > 500000) {
        console.log("You have to pay 35% tax")
        let tax = x * ( 35 / 100 )
        console.log(`Your tax on salary ${x} is ${tax.toFixed(3)} `)
        let netSalary = x - tax;
        console.log(`Your net salary is ${netSalary.toFixed(3)}`)
    }
}
incomeTax(372000)







// less than 50k no change
//50k - 1 lac 2.5% tax
//1lac - 2lac 12.5 tax
// 2lac - 3lac 22% tax
//3 - 5lac 27.5%
//5 - 10lac plus  35% tax