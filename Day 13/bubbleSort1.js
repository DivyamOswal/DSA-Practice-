// In the bubble sort bubble is a number which is arrange in the index which its belongs
let arr = [1, 5, 7, 8, 3, 34]
let n = arr.length
for(let i=0; i<n-1; i++){
    for(let j=0; j<n-1-i; j++){
        if(arr[j]> arr[j+1]){
        let temp = arr[j]
        arr[j]= arr[j+1]
        arr[j+1] = temp
    }
    }
}

console.log(arr) 

// Time Complexity is : n ** 2