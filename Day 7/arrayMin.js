let arr = [10, 20, 40, 50];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min);
