let arr = [10, 20, 40, 50];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
