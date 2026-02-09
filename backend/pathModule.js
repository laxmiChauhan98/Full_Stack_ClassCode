const path = require("path");

;

// const filePath = path.join(
//   __dirname,
//   "..",
//   "..",
//   "file",
//   "abcd.txt"
// );
// console.log(filePath);



const filePath = path.join("files","abcd.txt");  //joins the path segments
console.log(filePath)

// console.log(path.basename(filePath));
// console.log(path.extname("employee.pdf"));
console.log(path.resolve("files", "data.txt")); // genrates absolute path
