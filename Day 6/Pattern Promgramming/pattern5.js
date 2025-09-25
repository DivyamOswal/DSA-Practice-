// rows are control by the outer loop and the cloumn is controlled by the inner loop

// Method1:
let prompt = require ('prompt-sync')()
let n = Number(prompt("Enter a number:"))

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n-i+1; j++){
        process.stdout.write("*")
    }
    console.log()
}

// Method2:
 for(let j = n; j >= i; j--){
        process.stdout.write("*")
    }
    console.log()