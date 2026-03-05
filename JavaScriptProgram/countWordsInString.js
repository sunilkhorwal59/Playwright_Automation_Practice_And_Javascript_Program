let str = "this is test. this is test. yes";

// 1️⃣ Normalize string
str = str.replace(/\./g, ""); // remove dots

// 2️⃣ Split into words
let words = str.split(" ");

// 3️⃣ Create Map
let wordMap = new Map();

// 4️⃣ Count words
for (let word of words) {
  if (wordMap.has(word)) {
    wordMap.set(word, wordMap.get(word) + 1);
  } else {
    wordMap.set(word, 1);
  }
}

// 5️⃣ Print Map
console.log(wordMap);
