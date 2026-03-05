const str = "Ravi$%Next.12Five pet#l";

const result1 = str.replace(/[^a-zA-Z]/g, "");

console.log(result1); // Output: "RaviNextFivepetl"

function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattenArray([1, [2, 3, [4, 5, 6]]]));

let str1 = "I love Javascript programming"

let words = str1.split(" ")

let SecondLastWords = words[words.length-2]

const revSecondLast = SecondLastWords.split("").reverse().join("")

words[words.length-2] = revSecondLast

let result = words.join(" ")

console.log(result)