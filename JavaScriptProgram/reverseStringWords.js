let str = "Hello World";
let rev = "";

let words = str.split(" ");

for(let i = words.length - 1; i>=0; i--)
{
    rev = rev + words[i] + " ";
}

console.log("Original String is: " +str); // Hello World
console.log("Reversed String is: " +rev); // World Hello