const path = require("path");

const filePath1 = path.join(__dirname, "abcd.txt");
console.log(filePath1);


const filePath = path.join(
  __dirname,
  "..",
  "..",
  "file",
  "abcd.txt"
);

console.log(filePath);

console.log(path.basename(filePath));
console.log(path.extname("employee.pdf"));
console.log(path.resolve("files", "data.txt"));
