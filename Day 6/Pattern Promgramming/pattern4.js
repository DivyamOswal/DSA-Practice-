// rows are control by the outer loop and the cloumn is controlled by the inner loop
let prompt = require ('prompt-sync')()
let n = Number(prompt("Enter a number:"))

for(let i = 1; i <= n; i++){
    let ascii = 65
    for(let j = 1; j <= i; j++){
        process.stdout.write(String.fromCharCode(ascii) + "") //convert the ascii into the respective alphabet
        ascii++
    }
    console.log()
}