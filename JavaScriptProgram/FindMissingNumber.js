let arr = [2, 5, 7, 10, 6, 15];

let min = arr[0];
let max = arr[0];

for(let i = 1; i<arr.length; i++)
{
    if(arr[i]<min)
    {
        min = arr[i];
    }
    if (arr[i]>max)
    {
        max = arr[i];
    }
}

let present  = new Array(max-min +1).fill(false);

// Mark the present numbers in the boolean array
for(let num of arr)
{
    present[num - min] = true;
}
console.log(present);

// Find the missing numbers
for(i=0; i<present.length; i++)
{
    if(!present[i])
    {
        console.log("Missing Number is: " + (min + i));
    }
}
