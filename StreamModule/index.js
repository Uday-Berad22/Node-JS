const fs = require("fs");
// fs.writeFile("input.txt", "Hello From the Other Side", () => {});

const http = require("http");
const EventEmiter = require("events");
const event = new EventEmiter();

const server = http.createServer();
/*

Normal Method First download then use not streaming

server.on("request", (req, res) => {
  fs.readFile("input.txt", "utf-8", (err, data) => {
    res.end(data);
  });
});
server.listen(8000, "127.0.0.1", () => {});


*/

//Streaming Method

// event.emit("hello");

server.on("request", (req, res) => {
  const rstream = fs.createReadStream("inputs.txt");
  rstream.on("data", (chunkData) => {
    res.write(chunkData);
  });
  rstream.on("end", () => {
    res.end();
  });
  rstream.on("error", () => {
    res.end("Page not Found");
  });
});
server.listen(8000, "127.0.0.1", () => {});
