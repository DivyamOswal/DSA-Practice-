// if is independent and else is dependent on the if statement
let age = Number(prompt("Enter your age"))

if (isNaN(age)){
    console.log("Wrong input")
}
else if(age >= 18){
    console.log("You can vote")
}else{
    console.log("You are not a valid voter")
}
