// Sum of Natural Number

let pr = prompt("Enter your number")
if(pr === null){
    console.log("Cancelled")
}
else{
    let n = Number(pr)

if(isNaN(n)){
    console.log("Invalid Input")
}
else{
    if(n>0){
        let sum = 0
        for(let i = 0; i <= n; i++){
            sum = sum + i
        }
        console.log(sum)
    }
    else{
        console.log("Should be +ve and greater than 0")
    }

}
}