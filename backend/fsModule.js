//Reading file(async/non-blocking)

 const fs = require("fs");
fs.readFile("data.txt","utf8",(err, data) => {
  if (err) {
    console.log("Error reading file:","utf8", err.message);
    return;
  }
  console.log("File content:", data);
});
console.log("request 2d data from file");
console.log("reques 3d data from file");



//path  C:/Users/HP/Desktop/file/data.txt


// console.log("This message is logged after initiating file read.");





//Reading file(Sync/blocking)
// const fs = require("fs");

// try {
//   //FileSync does not accept a callback function hence 3rd argument is ignored
//   const data = fs.readFileSync("data.txt", "utf-8");
//   console.log("File content:", data);
// } catch (err) {
//   console.log("Error reading file:", err.message);
// }
// console.log("This will work after file read is completed.");
// console.log("Request 2nd data from file");
// console.log("Request 3rd data from file");


//writing file(async/non-blocking)
// const fs = require("fs");
// fs.writeFile("code.txt", "Hello Coders! Welcome", (err) => {
//   if (err) {
//     console.log("Error:", err.message);
//     return;
//   }
//   console.log("File written successfully");
// });


//appending data(async/non-blocking)

// const fs = require("fs");
// fs.appendFile("data.txt", "\nNew employee added", (err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log("Data appended");
// });

//deleting file(async/non-blocking)
// const fs = require("fs");
// fs.unlink("data.txt", (err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log("File deleted");
// });


//Renaming file(async/non-blocking)
//const fs = require("fs");

// fs.rename("code.txt", "Coders.txt", (err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log("File renamed successfully");
// });

//making folder 
// const fs = require("fs");
// fs.mkdir("employees", (err) => {
//   if (err) throw err;
//   console.log("Folder created");
// });


// const fs = require("fs");
// fs.rename(
//   "employeeData.txt",
//   "backup/employeeData.txt",
//   (err) => {
//     if (err) return console.log(err.message);
//     console.log("File moved to backup folder");
//   }
// );


