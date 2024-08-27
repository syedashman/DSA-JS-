// Write a program which print table of the given input
function table(num) {
    if (!num && num != 0) {
      console.log("Please enter the input");
      return;
    }
    if (num <= 1) {
      console.log("Sorry you must enter the number greater than 1");
      return;
    }
    console.log("We are printing the table of: ", num);
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} X ${i} = ${num * i}`);
    }
  }
  console.log(table(7));