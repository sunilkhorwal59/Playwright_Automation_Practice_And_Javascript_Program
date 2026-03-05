let arr= [1,2,5,7,8,3,2,7,2]

let map  = new Map();

for(let num of arr)
{
    map.set(num, (map.get(num) || 0) + 1)
}
console.log("Element Occurrences Map : 1");
console.log(map);

console.log("Duplicate Elements:2 ");
for (let [key, value] of map.entries()) {
    if (value > 1) {
        console.log("Duplicate " + key + " -> " + value);
    }
}

console.log("Non-Duplicate:3 ");
for (let [key, value] of map.entries())
     {
    if (value === 1) 
   {
        console.log("Non-Duplicate " + key);
    }   
     }

console.log("Unique Elements:4 ");
let unique = [...new Set(arr)]

console.log(unique)

console.log("Remove Duplicates:5 ");
let removeDuplicate = arr.filter(num =>
arr.indexOf(num) === arr.lastIndexOf(num)
)

console.log(removeDuplicate)