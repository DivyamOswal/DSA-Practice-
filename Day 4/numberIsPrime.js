// To check the number entered by the user is prime

let pr = prompt("Enter your number");

if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid Input");
  } else {
    if (n > 0) {
      let isPrime = true;
      for(let i = 2; i<= Math.floor(n / 2); i++){
        if(n % i === 0){
            isPrime = false
            break
        }
      }
      console.log(isPrime)
    } else {
      console.log("Should be +ve and greater than 0");
    }
  }
}

// Method 2:
function isPrime(n){
    if(n <= 1) return false
    if(n == 2) return true
    if(n % 2 == 0) return false
    for(let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2){
        if(n % i == 0) return false
    }
    return true
}
