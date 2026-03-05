
console.log("Pattern 1:")

for(let i=1; i<=5; i++)
{
    let line = "";
    for(let j=1; j<=i; j++)
    {
        line = line + j;
    }
    console.log(line);
}

console.log("----------------------------------------------------------");
console.log("Pattern 2:")

for(let i=1; i<=5; i++)
{
    let line = "";

    for(let j=1; j<=i; j++)
    {
        line = line + i;
    }
    console.log(line);
}

console.log("----------------------------------------------------------");

console.log("Pattern 3: * in Right Angle Triangle")

let m = 5;

for(let i=1; i<=m; i++)
{
    let line = "";
    for(let j=1; j<=i; j++)
    {
        line = line + "*";
    }   
    console.log(line);
}

console.log("----------------------------------------------------------");
console.log("Pattern 4: * in Inverted Right Angle Triangle")

let n = 5;

for(let i=n; i>=1; i--)
{
    let line = "";
    for(let j=1; j<=i; j++)
    {
        
    }
}

console.log("----------------------------------------------------------");

let num = 10;
for(let i=1; i<=num; i++)
{
   let line = ""
    for(let j=1; j<=i; j++)
    {
     line = line + "*";
    }
    console.log(line);

}

let a = 10;
let b = 20;

a = a+b
b = a-b
a= a-b

console.log("Value of a: "+a);
console.log("Value of b: "+b);
