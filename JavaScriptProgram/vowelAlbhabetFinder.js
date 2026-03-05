let str = "Hello World!";
let vowels = 0;
let consonants = 0;
let others = 0;

let temp = str.toLowerCase();

for(let char of temp)
{
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
    {
        vowels++;
    }
    else if (char>="a" && char <= "z")
    {
        consonants++;
    }
    else
    {
        others++;
    }
}

console.log("Vowels: " +vowels);
console.log("Consonants: " +consonants);
console.log("Others: " +others);