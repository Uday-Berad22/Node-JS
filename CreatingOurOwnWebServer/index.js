// HTTP Server
// HTTP module

const { log } = require("console");
const http = require("http"); //importing http module
const server = http.createServer(function (req, res) {
  // console.log(req.url);
  // res.end("Hello World,Myself Uday"); //response

  res.end("Hello World,Myself Uday"); //response
});

server.listen(8000); //request listener

// 8000 => port
// "127.0.0.1" => localhost
