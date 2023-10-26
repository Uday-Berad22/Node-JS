const fs = require("fs");
// fs.writeFileSync(
//   "hello.txt",
//   "Hello from Node.jsibfrjnjnjf  kdnfkndkajfbjds jfdjf"
// );

//Synchrounous

// console.log("Before  read");
// const data = fs.readFileSync("hello.txt", "utf-8");
// console.log(data);
// console.log("After read");

/* Synchronous Output

Before  read
Hello from Node.jsibfrjnjnjf  kdnfkndkajfbjds jfdjf
After read

*/

//Asynchronous
console.log("Before  read");
const data = fs.readFile("hello.txt", "utf-8", (err, data) => {});
console.log(data);
console.log("After read");

/*
Asynchronous Output
Before  read
After read
Hello from Node.jsibfrjnjnjf  kdnfkndkajfbjds jfdjf
*/
