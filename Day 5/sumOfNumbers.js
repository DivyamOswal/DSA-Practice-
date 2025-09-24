// Sum of the digits of the number entered by the user

let pr = prompt("Enter your number");

if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid Input");
  } else {
    if (n > 0) {
      let sum = 0;
      while (n > 0) {
        let rem = n % 10;
        sum = sum + rem;
        n = Math.floor(n / 10);
      }
      console.log(sum);
    } else {
      console.log("Should be +ve and greater than 0");
    }
  }
}
