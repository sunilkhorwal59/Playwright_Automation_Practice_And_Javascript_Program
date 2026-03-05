let str = "COMBINATION";

let start = 0;
let end = str.length;

// Print first full string
console.log(str);

while (end - start > 1) {

  // Remove last character
  end--;
  console.log(str.substring(start, end));

  // Remove first character (if more than one char left)
  if (end - start > 1) {
    start++;
    console.log(str.substring(start, end));
  }
}

