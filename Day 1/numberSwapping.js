// Method 1:(with extra veriable)
let a = 10
let b = 20
let i

i = a //10
a = b //20
b = i //10

console.log(a)
console.log(b)

// Method 2:(without extra variable)
let c = 10
let d = 20

c = c + d // 30
d = c - d // 10
c = c - d // 20

console.log(c)
console.log(d)

// Method 3:
let f = 10
let g = 20
[f, g] = [g, f]
console.log(f, g)
