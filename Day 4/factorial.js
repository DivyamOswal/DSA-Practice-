// Factorial of number entered by the user

let pr = prompt("Enter your number");

if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid Input");
  } else {
    if (n >= 0) {
      let fact = 1;
      for (let i = 1; i <= n; i++) {
        fact = fact * i;
      }
      console.log(fact);
    } else {
      console.log("Should be +ve and greater than 0");
    }
  }
}
