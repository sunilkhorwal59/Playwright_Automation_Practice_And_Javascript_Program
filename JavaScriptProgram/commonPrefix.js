const str = ["flower", "flow", "flight"];

let prefix = "";

if (str.length > 0) {
  prefix = str[0];

  for (let i = 1; i < str.length; i++) {
    while (str[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    //   if (prefix === "") {
    //     break;
    //   }
    }
  }
}

console.log(prefix);
