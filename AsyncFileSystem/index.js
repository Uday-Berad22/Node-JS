// console.log("Hello Guys");

// Async File CRUD Operations

// const { log } = require("console");
const fs = require("fs");

// fs.writeFile("hello.txt", "Hello from Node.js", (err) => {
//   console.log("bro done");
//   console.log(err);
// });

// fs.readFileSync("hello.txt", "utf-8", (err, data) => {
//     console.log(data);
// }

fs.readFile("hello.txt", "UTF-8", (err, data) => {
  console.log(data);
});
