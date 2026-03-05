let originalStrings = ["hello", "world", "Java", "Programming"];

// Print original array
console.log("Original String Array:");
for (let str of originalStrings) {
    console.log(str);
}

// 2. Create a new array to store uppercase strings
let upperCaseStrings = new Array(originalStrings.length);

// 3. Convert each string to uppercase
for(let i = 0; i<originalStrings.length; i++) 
{
    upperCaseStrings[i] = originalStrings[i].toUpperCase();
}

// 4. Print uppercase array
console.log("\nUppercase String Array:");
for(let str of upperCaseStrings)
{
    console.log(str);
}
