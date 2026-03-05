let arr1 = [1,2,4,5,2,5,15,12,9]

let removeDuplicates = arr1.filter(num => 
 arr1.indexOf(num) === arr1.lastIndexOf(num)
)

console.log("Remove duplicates: "+removeDuplicates);

let arr2 = [1,2,4,5,2,5,6, 15,13,9]

let unique = [...new Set(arr2)].sort((a,b) => a-b) // Unique elements in sorted order
console.log("Unique elements: "+unique);

console.log("Count of unique elements: "+unique.length);

var myArray = ['a', 1, 'a', 2, '1'];
var unique1 = myArray.filter(num =>
    myArray.indexOf(num) === myArray.lastIndexOf(num)
)
console.log("Unique elements in myArray: "+unique1);