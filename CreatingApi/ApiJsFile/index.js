const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  const Data = fs.readFileSync(
    `${__dirname}/ApiJsonData/userApi.json`,
    "utf-8"
  );
  if (req.url == "/") {
    res.end("WLC to Home");
  } else if (req.url == "/apiData") {
    res.end(Data);
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port 8000");
});

/*



const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/apiData") {
    fs.readFile(
      `${__dirname}/ApiJsonData/userApi.json`,
      "utf-8",
      (err, data) => {
        // console.log(data);
        // res.end(data);
        const objData = JSON.parse(data);
        res.end(objData[0].name);
      }
    );
    // console.log();
    // res.end("Hello");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port 8000");
});

*/
