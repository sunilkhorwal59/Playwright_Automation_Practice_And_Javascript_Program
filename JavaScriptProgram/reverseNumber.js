let num = 121;
let rev = 0;
let temp = num;

while(num> 0)
{
    let digit = num%10;
    rev = rev*10 + digit;
    num = Math.floor(num/10);
}

console.log("Original Number is: " +temp);
console.log("Reverse Number is: " +rev);

if(temp == rev)
{
    console.log("Given number is a Palindrome");
}
else
{
    console.log("Given number is not a Palindrome");
}
