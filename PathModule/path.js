const path = require("path");
console.log(path.dirname("C:/Node Js/PathModule/path.js"));
console.log(path.extname("C:/Node Js/PathModule/path.js"));
console.log(path.basename("C:/Node Js/PathModule/path.js"));

const obj = path.parse("C:/Node Js/PathModule/path.js"); /*path.js
{
  root: 'C:/',
  dir: 'C:/Node Js/PathModule',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
*/
console.log(obj);
console.log(obj.name);
console.log(obj.root);
