let str = "Hello World";
let rev = "";

for(let i=str.length-1; i>=0; i--)
{
    rev = rev + str[i];
}

console.log("Original String is: " +str); // Hello World
console.log("Reversed String is: " +rev); // dlroW olleH