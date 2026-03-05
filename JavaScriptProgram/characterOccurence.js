let string = "Hello World";

// Map to store character count
let countMap = new Map();

for(let char of string)
{
    countMap.set(char, (countMap.get(char) || 0) + 1);
} 
console.log("Input String:"+string);
console.log("Character Occurrences Map:");
console.log(countMap);

// Duplicate characters
console.log("Duplicate Key");
for (let [key, value] of countMap.entries()) {
    if (value > 1) {
        console.log(" " + key);
    }
}

// Non-Duplicate/ Unique characters
for(let [key, value] of countMap.entries())
{
    if(value === 1)
    {
        console.log("Non-Duplicate/Unique : " + key);
    }
}