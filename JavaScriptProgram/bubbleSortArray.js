let arr = [56, 23, 88, 12, 5, 78, 90];

for(let i=0; i<arr.length; i++)
{
    for(let j= i+1; j<arr.length; j++)
    {
        if(arr[i] > arr[j])
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
for(let num of arr)
    {
        console.log(num);
    }