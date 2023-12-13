const obj = {
  Name: "Uday",
  Year: "3rd",
  Age: "19",
};
// console.log(obj);
// console.log(obj.Name);

//obj to json
const jsonData = JSON.stringify(obj);
// onsole.log(jsonData);
// console.log(typeof jsonData);

//Json to obj
const JsonToObj = JSON.parse(jsonData);
// console.log(JsonToObj);

//Convert obj to json
//Creatre a json file
//Add that content into file
//read that content
//convert to obj

const fs = require("fs");
// fs.writeFile("json1.json", jsonData, (err, data) => {
//   console.log(data);
// });
fs.readFile("json1.json", "utf-8", (err, data) => {
  const Object = JSON.parse(data);
  console.log(Object);
  console.log(data);
});
