// Factors of number entered by the user

let pr = prompt("Enter your number");

if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid Input");
  } else {
    if (n > 0) {
      for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % 1 === 0) {
          console.log(i);
        }
      }
      console.log(n); // to print the number itself
    } else {
      console.log("Should be +ve and greater than 0");
    }
  }
}
