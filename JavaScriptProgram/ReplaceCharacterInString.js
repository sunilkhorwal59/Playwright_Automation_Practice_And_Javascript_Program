
let input = "Sunil Khirwal";
let output = "";

for(let ch of input)
{
    if (ch == "i")
    {
        output = output + "$";    // Replacing 'i' with '$'
    }
    else 
    {
        output = output + ch ;
    }
}

console.log("Original String: " + input);  // Original String: Sunil Khirwal
console.log("Modified String: " + output); // Modified String: Sun$l Kh$rwal