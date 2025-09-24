// To check the number given by the user is strong number
// If the factorial sum of the digits of the number is equal to the number itself than it is said to be strong number

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
      let copy = n;
      while (n > 0) {
        let rem = n % 10;
        let fact = 1;
        for (var i = 1; i <= rem; i++) {
          fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10);
      }
      if (n === sum) {
        console.log("strong");
      } else {
        console.log("not strong");
      }
    } else {
      console.log("Should be +ve and greater than 0");
    }
  }
}
