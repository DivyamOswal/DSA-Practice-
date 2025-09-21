// Area of triangle by herons formulae:
// Formula = sqrt of s * (s - a) * (s - b) * (s - c) 
// s is the semiparameter(half)

let a = 5
let b = 4
let c = 3

let s = (a + b + c) / 2

console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)) )


