const os = require("os");

console.log(os.arch()); //x64
console.log(os.type()); //Windows_NT

const freeRam = os.freemem();
console.log(`${freeRam / 1024 / 1024 / 1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);

console.log(os.hostname()); //LAPTOP-J9RKH5F1
