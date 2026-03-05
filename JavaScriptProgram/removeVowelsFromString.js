
let str = "My Name is Sunil Khorwal";
let result = "";

str = str.toLowerCase();

for(let ch of str)
{
    if(!(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u"  ))
    {
        result  = result + ch;
    }
}
console.log("Original String: " + str);
console.log("String after removing vowels: " + result);