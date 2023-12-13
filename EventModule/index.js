const EventEmitter = require("events"); //Creating Class
const event = new EventEmitter(); // Creating Obj

event.on("Hello", () => {
  // Event Listner
  console.log("Hello Event fired ");
});
/*
Multiple Callback for same event 

event.on("Hello", () => {
  console.log("Fireeee ");
});
event.on("Hello", () => {
  console.log("Heeeyy ");
});
event.on("Hello", () => {
  console.log("Bro ");
});
*/
event.emit("Hello"); //Event Fired

event.on("Hey", (portNum, msg) => {
  // Event Listner With parameters
  //
  console.log(`Hey Event Port Number ${portNum} and ${msg}`);
});

event.emit("Hey", 8000, "It's Okay"); //fire event With arguments
