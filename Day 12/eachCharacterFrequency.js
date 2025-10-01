// Printing frequncy of each character in string

let s = prompt("Enter a number")
let arr = new Array(128).fill(0)

for(let i=0; i<s.length; i++){
    let idx = s.charCodeAt(i)
    arr[idx] = arr[idx] + 1
}

for(let i=0; i<arr.length; i++){
    if(arr[i]>0){
        console.log(String.fromCharCode(i) + "appears at " + arr[i] + " times")
    }
}