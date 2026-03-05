let n = 77;
let isPrime = true;

if (n <= 1)
{
    isPrime = false;
}
else if (n == 2 || n == 3)
{
    isPrime = true;
}
else
{
    for(let i = 2; i*i <= n; i++)
    {
        if (n % i == 0)
        {
            isPrime = false;
            break;
        }
    }
}

if (isPrime)
{
    console.log(n + " is a Prime Number");
}
else 
{
    console.log(n + " is not a Prime Number");
}