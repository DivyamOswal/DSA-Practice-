// Combination of two pattern inverted and normal right triangle
// mirror right angle triangle 

let prompt = require ('prompt-sync')()
let n = Number(prompt("Enter a number:"))

for(let i = 1; i <= n; i++){
    // inverted right5 angle triangle
    for(let j = 1; j <= n-i; j++){
        process.stdout.write(" ")
    }
    // right angle triangle
    for(let j = 1; j <= i; j++){
        process.stdout.write("*")
    }
    console.log() //take the upcoming process onthe next line
}
