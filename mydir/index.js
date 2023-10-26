const { log } = require("console");
const fs = require("fs");
// fs.mkdirSync("newdir");

// fs.writeFileSync("newdir/newfile.txt", "Hello from Node.js");

// fs.appendFileSync("newdir/newfile.txt", "HELLO bhai kya Chal raha hai");

// const buf_data = fs.readFileSync("newdir/newfile.txt");
// console.log(buf_data);

// const encoded_data = fs.readFileSync("newdir/newfile.txt", "utf-8");
// console.log(encoded_data);

// fs.renameSync("newdir/newfile.txt", "newdir/newfile2.txt");

// fs.unlinkSync("newdir/newfile2.txt");
// fs.unlinkSync("hello.txt");

fs.rmdirSync("newdir");
