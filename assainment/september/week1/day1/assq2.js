// **2. Factorial of a Number:**
// Write a program to calculate the factorial of a given number `n` using a `for` loop.

const n =5;
let factorial =1;
for(let i=1; i<=n; i++){
    factorial *= i;
}
console.log(factorial);