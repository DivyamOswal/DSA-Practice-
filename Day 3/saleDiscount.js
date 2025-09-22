// Method 1:
let amount = Number(prompt("What is the total amount"))
if(amount > 0 && amount <= 5000){
    console.log(amount)
}else if(amount > 5000 && amount <= 7000){
    console.log(amount - Math.floor((5 * amount)/100))
}else if(amount > 7000 && amount <= 9000){
    console.log(amount - Math.floor((10 * amount)/100))
}else if(amount > 9000){
    console.log(amount - Math.floor((5 * amount)/100))
}else{
    console.log("Enter a valid amount")
}

// Method 2:
let totalAmount = Number(prompt("What is the total amount"))
let dis = 0
if(totalAmount > 0 && totalAmount <= 5000){
   dis = 0
}else if(totalAmount > 5000 && totalAmount <= 7000){
    dis = 5
}else if(totalAmount > 7000 && totalAmount <= 9000){
   dis = 10
}else if(amount > 9000){
    dis = 20
}else{
    console.log("Enter a valid amount")
}
console.log(totalAmount - Math.floor((dis * amount)/100))