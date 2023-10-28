// HTTP Server
// HTTP module

const http = require("http"); //importing http module

const server = http.createServer(function (req, res) {
  res.end("Hello World,Myself Uday"); //response
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port no 8000"); //callback
}); //request listener

// 8000 => port
// "127.0.0.1" => localhost
