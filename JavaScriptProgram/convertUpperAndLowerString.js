console.log("-----------------Uppercase & Lowercase without in-built method --------------");

let str = "My name is Sunil Khorwal";

let result = "";

for(let ch of str)
{
     // check if character is Uppercase (a–z)
     if(ch >= 'a' && ch <= 'z')
     {
        ch = String.fromCharCode(ch.charCodeAt(0) - 32); // convert to Uppercase
     }
     result = result + ch;
}
console.log("Original String: " + str);
console.log("Uppercase String: " + result);


console.log("===================================");

let str1 = "Hello World";

console.log("In-Built method to change case");

let lower = str1.toLowerCase();
let upper = str1.toUpperCase();

console.log("LowerCase:", lower);
console.log("UpperCase:", upper);