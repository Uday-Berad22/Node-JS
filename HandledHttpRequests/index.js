const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url); /*/favicon.ico
        /About
        /favicon.ico
        */
  if (req.url == "/") {
    res.end("From Home Page");
  } else if (req.url == "/contact") {
    res.end("From Contact side");
  } else if (req.url == "/about") {
    res.writeHead(200, "Success");
    res.end("From About side");
  } else {
    res.writeHead(404, "Error Bro", { "Content-type": "text/html" });
    res.end("404 Error");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listing to the port no.8000");
});
