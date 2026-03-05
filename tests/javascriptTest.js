const { count } = require("console");

let getUserData = new Promise((resolve, reject) => {
    let isSuccess = true;

    if (isSuccess) {
        resolve("User data received");
    } else {
        reject("Error fetching user data");
    }
});

getUserData
    .then(result => console.log(result))
    .catch(error => console.log(error));


    if (true) {
    var b = 50;
}
console.log(b); // 50 (accessible outside block)

function processData(callback) {
    console.log("Processing...");
    callback();
}

function done() {
    console.log("Completed!");
}

processData(done);

function countDown(n) {
    if (n === 0) return;
    console.log(n);
    countDown(n - 1);
}

countDown(3);

function sum(a,b)
{
    console.log(a + b);
    var c = 10;
    console.log(c);
}

sum(5,5);

let r =10;
r =50

function main(callback)
{
    console.log("Main function");
    callback();
}

function sub() {
    console.log("Sub function");
}

main(sub)

const str = "Automation";

const map = new Map();

for (let char of str.toLowerCase()) {
  map.set(char, (map.get(char) || 0) + 1);
}

console.log(map);

let fact = 1;
let n = 5;
for(let i=1; i<=n; i++)
{
    fact = fact*i;
}
console.log(fact);



