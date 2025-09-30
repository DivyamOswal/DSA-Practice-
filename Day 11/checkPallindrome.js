// Takes more space
let s = prompt("Enter a string");
let rev = "";

for (let i = s.length - 1; i >= 0; i--) {
  rev = rev + s.charAt(i);
}
if (rev == s) console.log("palindrome");
else console.log("Not Palindrome");

// Effecient method:
let str = prompt("Enter a String");
let isPallindrome = true;

let i = 0;
j = s.length - 1;
while (i < j) {
  if (s.charAt(i) != s.charAt(j)) {
    isPallindrome = false;
    break;
  }
  i++;
  j--;
}

if (isPallindrome) console.log("pallindrome");
else console.log("Not pallindrome");
